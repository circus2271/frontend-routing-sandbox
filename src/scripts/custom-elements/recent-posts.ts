
class RecentPosts extends HTMLElement {
    static observedAttributes = ['visible'];
    placeholderPosts: Array<{'title': string, description: string, tags: string[]}>

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