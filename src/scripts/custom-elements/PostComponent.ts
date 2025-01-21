import {settings} from "./settings-component";
import {cleanUpAttributes} from "../modules/helpers";

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
    comments?: Comments[],
    content?: PostContent | null | undefined
    // maybe extract some part of this to PostDetail type
}

type Comments = {
    author: string, // author's username
    'text-content': string
}

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

        this.innerHTML = this.getMarkup()
    }

    // connectedCallback() {
    //     // this.image = this.getAttribute('img')
    //     this.slug = this.getAttribute('slug')
    //     this.title = this.getAttribute('title')
    //     this.description = this.getAttribute('description')
    //     this.date = this.getAttribute('date')
    //
    //     this.innerHTML = this.getMarkup()
    // }

    getMarkup() {
        const markup = `
          <div class="wrapper">
            ${this.image ?? `
              <header>
    <!--            <header-parallax-image></header-parallax-image>-->
    <!--            if image -->
                <div class="image-wrapper" ${settings.prefersReducedAnimation() && 'no-parallax'}>
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
    <ul>
      <li>
        <span>
          comment author:
        </span>
        <span>
          comment text
        </span>
      </li>
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