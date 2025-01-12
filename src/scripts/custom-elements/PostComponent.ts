import {settings} from "./settings-component";

class PostComponent extends HTMLElement {
    image: string | null

    constructor() {
        // Always call super first in constructor
        super();
        // alert(4)

    }

    connectedCallback() {
        this.image = this.getAttribute('img')

        this.innerHTML = this.getMarkup()
    }

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
          <div class="main-text">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, labore!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil perspiciatis sit vero. Aliquid autem delectus dolorem fuga repellendus similique sunt?</p>
          </div>
        </div>
        `

        return markup
    }
}

// secret component
customElements.define("post-component", PostComponent);