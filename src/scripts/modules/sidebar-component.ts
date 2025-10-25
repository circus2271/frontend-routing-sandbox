import {themeSwitchEvent} from '@modules/utils'

class SidebarComponent extends HTMLElement {

    constructor() {
        // Always call super first in constructor
        super();
    }

    connectedCallback() {
        themeSwitchEvent.registerCallback((event) => {

            const themeToggler = this.querySelector('#theme-toggle')
            const newTheme = event.detail.newTheme

            if (theme === 'light') {
                themeToggler.style.color = 'yellow'
            }

            if (theme === 'dark') {
                themeToggler.style.color = 'red'
            }
        })
    }
}

customElements.define('signup-component', SidebarComponent);