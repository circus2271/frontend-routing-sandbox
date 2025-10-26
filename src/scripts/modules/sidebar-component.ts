// import {themeSwitchEvent} from '@modules/utils'
import {themeSwitchEvent} from './utils'
 
class SidebarComponent extends HTMLElement {

    constructor() {
        // Always call super first in constructor
        super();
    }

    connectedCallback() {
        themeSwitchEvent.registerCallback((event) => {

            const themeToggler = this.querySelector<HTMLElement>('#theme-toggle')
            const newTheme = event.detail.newTheme

            if (newTheme === 'light') {
                themeToggler.style.color = 'yellow'
            }

            if (newTheme === 'dark') {
                themeToggler.style.color = 'red'
            }
        })
    }
}

customElements.define('signup-component', SidebarComponent);