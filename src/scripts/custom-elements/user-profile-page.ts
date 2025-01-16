import {settings} from "./settings-component";

// profile detail page
class ProfilePageComponent extends HTMLElement {

    constructor() {
        // Always call super first in constructor
        super();

    }

    connectedCallback() {
//         this.image = this.getAttribute('img')

        this.innerHTML = this.getMarkup()
    }

    getMarkup() {
        const markup = `

           <div class="recent-posts wrapper">
             <ul>
               <li>
                 <a href="/@ivan/post-1">
                   <h2 class="post-header">
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, maiores?
                   </h2>
                 </a>
                 <p class="post-short-description">
                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci debitis dolorem iste obcaecati, provident quidem quos reiciendis ullam veritatis!
                 </p>
                 <div class="author">
                   <div class="author__avatar"></div>
                   <div class="author__name">
                     @ivan
                   </div>
                   <div class="date">
                     01.04.17
                   </div>
                 </div>
               </li>
               <li>
                 <h2 class="post-header">
                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, maiores?
                 </h2>
                 <p class="post-short-description">
                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci debitis dolorem iste obcaecati, provident quidem quos reiciendis ullam veritatis!
                 </p>
                 <div class="author">
                   <div class="author__avatar"></div>
                   <div class="author__name">
                     @ivan
                   </div>
                   <div class="date">
                     01.04.17
                   </div>
                 </div>
               </li>
               <li>
                 <h2 class="post-header">
                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, maiores?
                 </h2>
                 <p class="post-short-description">
                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci debitis dolorem iste obcaecati, provident quidem quos reiciendis ullam veritatis!
                 </p>
                 <div class="author">
                   <div class="author__avatar"></div>
                   <div class="author__name">
                     @ivan
                   </div>
                   <div class="date">
                     01.04.17
                   </div>
                 </div>
               </li>
               <li>
                 <h2 class="post-header">
                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, maiores?
                 </h2>
                 <p class="post-short-description">
                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci debitis dolorem iste obcaecati, provident quidem quos reiciendis ullam veritatis!
                 </p>
                 <div class="author">
                   <div class="author__avatar"></div>
                   <div class="author__name">
                     @ivan
                   </div>
                   <div class="date">
                     01.04.17
                   </div>
                 </div>
               </li>
             </ul>

             <div class="load-more-button">
               load more sh..
             </div>
           </div>
        `

        return markup
    }
}

// secret component
customElements.define('user-profile-component', ProfilePageComponent);