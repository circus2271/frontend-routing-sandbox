
class RecentPosts extends HTMLElement {
    static observedAttributes = ['visible'];
    placeholderPosts: Array<{'title': string, description: string, tags: string[]}>
    scrollableElement;

    constructor() {
        // Always call super first in constructor
        super();

        this.placeholderPosts = [
            {
                title: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci aperiam architecto asperiores at, cumque, doloribus ducimus eligendi, error exercitationem expedita explicabo illo laboriosam molestiae obcaecati odio officia optio perspiciatis provident quae ratione repellendus vitae voluptates? Doloremque ea eum itaque maxime nulla numquam quia ratione repellendus saepe voluptates. Dicta, sed.',
                tags: ['#wow', '#tag', '#hello']
            },
            {
                title: 'Lorem ipsum.',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti facere impedit mollitia nihil qui? A dicta earum eos ex ipsa neque nostrum nulla obcaecati odio optio quaerat, reprehenderit sunt unde?',
                tags: ['#wow', '#tag', '#hello']
            },
            {
                title: 'Lorem ipsum dolor.',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi hic impedit magnam vero? Accusamus adipisci, assumenda consequatur debitis deleniti distinctio eaque inventore magnam magni minus officiis quia, quidem quo reprehenderit sunt velit vero, voluptatem. Cumque ea mollitia, nam repudiandae sint vero voluptatem.',
                tags: ['#wow', '#tag', '#hello']
            },
        ]
        this.innerHTML = this.getMarkup()

        // this.scrollableElement = document.querySelector('.recent-posts .wrapper');
        // this.scrollableElement.addEventListener('scroll', this.onScroll)
    }

    connectedCallback() {
        // ...
        this.onScroll = this.onScroll.bind(this);

        this.scrollableElement = document.querySelector('.recent-posts .wrapper');
        this.scrollableElement.addEventListener('scroll', this.onScroll)

        // setTimeout(() => this.onScroll(), 1000)

        setTimeout(() => {
            this.onScroll()
        }, 0)
    }

    disconnectedCallback() {
        this.scrollableElement.removeEventListener('scroll', this.onScroll)
    }

    onScroll() {
        const isScrollable = this.scrollableElement.clientWidth < this.scrollableElement.scrollWidth
        // debugger
        //.. it could be moved to a different place in a code
        this.scrollableElement.classList.toggle('has-scroll', isScrollable)

        if (isScrollable) {
            // //.. it could be moved to a different place in a code
            // this.scrollableElement.classList.add('has-scroll')
            // // this.scrollableElement.toggleAttribute('has-scroll', isScrollable)

            const scrolled = this.scrollableElement.scrollLeft > 0
            const scrolledToAnEnd = Math.ceil(this.scrollableElement.scrollLeft + this.scrollableElement.clientWidth) >= this.scrollableElement.scrollWidth
            console.log({a: Math.ceil(this.scrollableElement.scrollLeft + this.scrollableElement.clientWidth) >= this.scrollableElement.scrollWidth, l: this.scrollableElement.scrollLeft, cw: this.scrollableElement.clientWidth, sw: this.scrollableElement.scrollWidth})
            // if (scrolledToAnEnd) this.scrollableElement.classList.add('scrolled-to-an-end')
            // if (!scrolledToAnEnd) this.scrollableElement.classList.remove('scrolled-to-an-end')
            //
            // if (scrolled) this.scrollableElement.classList.add('scrolled')
            // if (!scrolled) this.scrollableElement.classList.remove('scrolled')

            this.scrollableElement.classList.toggle('scrolled', scrolled)
            this.scrollableElement.classList.toggle('scrolled-to-an-end', scrolledToAnEnd)
            // this.scrollableElement.toggleAttribute('scrolled', scrolled)
            // this.scrollableElement.toggleAttribute('scrolled-to-an-end', scrolledToAnEnd)

        }
    }

    getTagsMarkup(tags) {
        let tagsMarkup = ``

        if (tags.length) {
            tagsMarkup = `
              <div class="tags">
                ${tags.map(t => `
                  <span>${t}</span>
                `).join('')}
              </div>
            `
        }

        return tagsMarkup
    }

    getMarkup() {
        const markup = `
          <div class="recent-posts">
            <div class="wrapper">
              ${this.placeholderPosts.length === 0
              ? 'no recent posts yet'
              : this.placeholderPosts.map(p => `
                  <article class="recent-post">
                    <div class="wrapper">
                      <h2>
                        ${p.title}
                      </h2>
                      <p>
                        ${p.description}                      
                      </p>
                      ${this.getTagsMarkup(p.tags)}
                    </div>
                  </article>
                `).join('')}
            </div>
          </div>
        `

        return markup
    }
}

customElements.define('recent-posts', RecentPosts);