import {settings} from "@custom-elements/settings-component";
import {Post} from "@custom-elements/PostComponent";
// import {users} from "@mock-data";
import {users} from "../../mock-data";

// profile detail page
class ProfilePageComponent extends HTMLElement {
    static observedAttributes = ['visible'];

    paginateBy: number = 3
    // paginateBy: number = 30
    startIndex: number = 0
    endIndex: number = this.paginateBy
    // nextPage: boolean;
    // nextPage: boolean;
    hasNextPage: boolean;
    postsAmount: number;
    currentPage: 1;
    flat: true;//

    // get hasNextPage() {
    //     this.endIndex >= this.postsAmount
    // }

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

        this.posts = this.getPosts({from: this.startIndex, to: this.endIndex})
        this.hasNextPage = this.endIndex <= this.postsAmount

        this.innerHTML = this.getMarkup()

        let loadMoreButton = this.querySelector<HTMLElement>('#load-more-button')
        const postsWrapper = this.querySelector('#posts-wrapper')
        if (loadMoreButton) {
            loadMoreButton.onclick = (e) => {
                // load some more posts
                this.currentPage++
                // this.startIndex += this.paginateBy
                // this.endIndex += this.paginateBy
                this.startIndex = this.endIndex
                this.endIndex += this.paginateBy

                const newPosts = this.getPosts({from: this.startIndex, to: this.endIndex})
                // this.posts.push(...newPosts)
                this.posts = [...this.posts, ...newPosts]

                this.hasNextPage = this.endIndex <= this.postsAmount

                postsWrapper.innerHTML += newPosts.map(post => this.getPostMarkup(post)).join('')

                if (!this.hasNextPage) {
                    loadMoreButton.style.display = 'none'
                }
            }
        }
    }

    getPosts(range: {from: number, to: number}): Post[] | [] {
        // get all posts and then return some of them is not perfect realisation, but fro now let's try assume that it's ok
        const posts = users.find(user => user.username === this.username).posts
        this.postsAmount = posts.length


        const startIndex = range.from
        const endIndex = range.to

        return posts.slice(startIndex, endIndex)
    }


    getPostMarkup(postData: Post): string {
        const post = postData

        return `
          <li>
            <a href="/${this.username}/${post.slug}" custom-link ripple-effect">
              <h2 class="post-header">
                ${post.title}
              </h2>
            </a>
            <p class="post-short-description">
              ${post.description}
            </p>
          </li>
        `
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
               <ul id="posts-wrapper">
                 ${this.posts.map(post => this.getPostMarkup(post)).join('')}
               </ul>

               ${this.hasNextPage && `
                 <div class="load-more-button" id="load-more-button">
                   load more sh..
                 </div>
               `}
             </div>
           `}
        `

        return markup
    }
}

// secret component
customElements.define('user-profile-component', ProfilePageComponent);