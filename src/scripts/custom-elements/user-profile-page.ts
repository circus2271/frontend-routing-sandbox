import {settings} from "./settings-component";

// profile detail page
class ProfilePageComponent extends HTMLElement {
    static observedAttributes = ['username', 'name', 'email'];

    username: string
    name: string
    email?: string

    constructor() {
        // Always call super first in constructor
        super();

    }

    attributeChangedCallback(name, oldValue, newValue) {
        // console.log(`Attribute ${name} has changed.`);
        // this.username = this.getAttribute('username')
        // this.name = this.getAttribute('name')
        // this.email = this.getAttribute('email')
        // maybe it's not 100% correct to do it like this
        this[name] = newValue

        this.innerHTML = this.getMarkup()
    }

    connectedCallback() {
//         this.image = this.getAttribute('img')
        this.username = this.getAttribute('username')
        this.name = this.getAttribute('name')
        this.email = this.getAttribute('email')

        //
        // const user = {
        //     username: this.username
        // }

        this.innerHTML = this.getMarkup()
        // debugger
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