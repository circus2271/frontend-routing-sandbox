import {settings} from "@modules/settings";
// import {cleanUpAttributes} from "@modules/helpers";
// /**/import {users} from "@mock-data";
import {users} from "../../mock-data";
// import {currentUser} from "@modules/user";
let currentUser = null
export type Post = {
    slug: string,
    title: string,
    image?: string,
    description?: string
    date: string,
    author?: {
        avatar?: string,
        username: string
    }
    // comments?: Comments[] | [],
    comments?: Comment[] | [],
    content?: PostContent | null | undefined,
    tags?: string[]
    // maybe extract some part of this to PostDetail type
}

// https://www.typescriptlang.org/docs/handbook/utility-types.html#picktype-keys
type Comment = Pick<Post, 'author'> & {
    'text-content': string
}

// type Comments = (Pick<Post, 'author'> & {
//     'text-content': string
// })[]

// type Comments = Comment[]

// type Comments = {
//     author: string, // author's username
//     'text-content': string
// }

type PostContent = {
    content: 'string'
}

// type PostDetail = {}


class PostComponent extends HTMLElement {
    // static observedAttributes = ['slug', 'title', 'description', 'date', 'image'];
    static observedAttributes = ['visible'];
    // image: string | null
    slug: string
    title: string
    description: string
    date: string
    image: string
    post: Post
    // comments: Pick<Post, 'comments'> = []
    comments = []

    constructor() {
        // Always call super first in constructor
        super();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        // if (newValue === 'false') {
        //     cleanUpAttributes(this, ['slug', 'title', 'description', 'date'])
        //
        //     return
        // }

        this.slug = this.getAttribute('slug')
        this.title = this.getAttribute('title')
        this.description = this.getAttribute('description')
        this.date = this.getAttribute('date')

        let currentPost;
        for (let user of users) {
            const post = user.posts.find((p: Post) => p.slug === this.slug)
            if (post) {
                currentPost = post

                break;
            }
        }

        if (currentPost) {
            this.comments = currentPost.comments
        }

        this.innerHTML = this.getMarkup()
        // setTimeout(() => {
            // alert(document.querySelector('form').addEventListener)
        // document.querySelector('form').addEventListener('submit', (e) => {
        const form = this.querySelector('form')
        form.onsubmit = function(e) {
            e.preventDefault()

            if (currentUser) {
              const textarea = form.querySelector<HTMLElement>('textarea')
              textarea.innerText = '12'    
            } else {
                // redirect to login screen
                            // history.pushState({}, '', nextRoute.redirectTo)
                            history.pushState({}, '', '/about')

            }
            
        }    
    // },1000)
        

        
    }

    getMarkup() {
        const markup = `
          <div class="wrapper">
            ${this.image ?? `
              <header>
    <!--            <header-parallax-image></header-parallax-image>-->
    <!--            if image -->
                <div class="image-wrapper" ${settings.prefersReducedAnimation && 'no-parallax'}>
                  <img src="#" alt="">
                </div>
              </header>
          `}
            
            <h2 class="post__title">
              ${this.title}
            </h2>
            <p class="post__description">
              ${this.description}
            </p>
<!--          <div class="main-text">-->
            <p class="post__date">
              ${this.date}
            </p>
            <div class="comments">
    <div class="new-comment-form-wrapper">
      <form id="new-comment-form">
        <label for="new-comment-field"></label>
        <textarea id="new-comment-field"></textarea>
        <button type="submit">
          submit a comment
        </button>
      </form>
    </div>
    ${this.comments.length > 0 && this.comments.map(comment => {
        return `
          <li>
            <span>
              comment author: <span><a href="/${comment.author.username}" custom-link ripple-effect>${comment.author.username}</a></span>
            </span>
            <span>
              comment text: <span>${comment['text-content']}</span>
            </span>
          </li>
        `
    }).join('')}
    <ul>
      
    </ul>
  </div>
<!--            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, labore!</p>-->
<!--            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil perspiciatis sit vero. Aliquid autem delectus dolorem fuga repellendus similique sunt?</p>-->
<!--          </div>-->
        </div>
        `

        return markup
    }
}

// secret component
customElements.define('post-component', PostComponent);