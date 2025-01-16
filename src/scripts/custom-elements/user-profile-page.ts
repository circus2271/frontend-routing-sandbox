import {settings} from "./settings-component";
import {Post} from "./PostComponent";
import {users} from "../mock-data";

// profile detail page
class ProfilePageComponent extends HTMLElement {
    static observedAttributes = ['visible'];

    username: string
    name: string
    email?: string
    posts: Post[] | []

    constructor() {
        // Always call super first in constructor
        super();

    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.username = this.getAttribute('username')
        this.name = this.getAttribute('name')
        this.email = this.getAttribute('email')

        this.posts = this.getPosts({preview: true})

        this.innerHTML = this.getMarkup()

        let loadMoreButton = this.querySelector<HTMLElement>('#load-more-button')
        loadMoreButton.onclick = (e) => {
            // load some more posts
            this.posts = this.getPosts()

            // TODO: update only posts markup
            // TODO: make pagination (show groups of 4 or 5 posts, then this button fetches some more (if any))
            this.innerHTML = this.getMarkup()

            // const button = e.currentTarget
            // button.style.display = 'none' // hide button
            // loadMoreButton is rewrite due to new markup.. so find it again and then disable
            loadMoreButton = this.querySelector<HTMLElement>('#load-more-button')
            loadMoreButton.style.display = 'none' // hide button
        }
    }

    connectedCallback() {
        // this.username = this.getAttribute('username')
        // this.name = this.getAttribute('name')
        // this.email = this.getAttribute('email')
        //
        // this.innerHTML = this.getMarkup()
    }

    // maybe it's better to have this method in some external "getter" class
    // getPosts(preview?: boolean, range?: {from: number, to: number}) {
    // getPosts({preview, range}: {preview?: boolean, range?: {from: number, to: number}}) {
    // wow
    getPosts({preview, range}: {preview?: boolean, range?: {from: number, to: number}} = {}): Post[] | [] {
        if (preview) {
            // return only first 3 recent posts...
            // not the most efficient way obviously..
            return users.find(user => user.username === this.username).posts.slice(0, 3)
        }

        // maybe useful for pagination or for 'load more' button
        if (range) {
            const { from, to } = range
            return users.find(user => user.username === this.username).posts.slice(from, to)
        }

        return users.find(user => user.username === this.username).posts || []
    }

    getMarkup() {
        const markup = `

           <div class="user-info wrapper">
             <h2 class="username">
               ${this.username}
             </h2>
             ${this.email && `
               <p>
                 user email
               </p>
             `}
             <p>
               ${this.name}
             </p>
           </div>
           
           <div class="recent-posts wrapper">
             ${this.posts.length === 0 ? `
               <h2>no posts yet...</h2>
             ` : `  
               <ul>
                 ${this.posts.map(post => `
                   <li>
                     <a href="/${this.username}/${post.slug}" custom-link ripple-effect">
                       <h2 class="post-header">
                         ${post.title}
                       </h2>
                     </a>
                     <p class="post-short-description">
                       ${post.description}
                     </p>
<!--                     <div class="author">-->
<!--                       <div class="author__avatar"></div>-->
<!--                       <div class="author__name">-->
<!--                         @ivan-->
<!--                       </div>-->
<!--                       <div class="date">-->
<!--                         01.04.17-->
<!--                       </div>-->
<!--                     </div>-->
                   </li>
                 `).join('')}
               </ul>

               <div class="load-more-button" id="load-more-button">
                 load more sh..
               </div>
             </div>
           `}
        `

        return markup
    }
}

// secret component
customElements.define('user-profile-component', ProfilePageComponent);