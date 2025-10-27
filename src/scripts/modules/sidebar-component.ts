// import {themeSwitchEvent} from '@modules/utils'
import {themeSwitchEvent} from './utils'
import {settings} from '@modules/settings'
 
class SidebarComponent extends HTMLElement {

    constructor() {
        // Always call super first in constructor
        super();
    }

    connectedCallback() {
        this.innerHTML = this.getMarkup()

        const themeToggler = this.querySelector<HTMLElement>('#sidebar-theme-toggle')

        themeToggler.addEventListener('click', e => {
            themeSwitchEvent.dispatchEvent()
        })

        themeSwitchEvent.registerCallback((event) => {

            // const newTheme = event.detail.newTheme
            const newTheme = settings.currentTheme

            if (newTheme === 'light') {
                themeToggler.style.color = 'yellow'
            }

            if (newTheme === 'dark') {
                themeToggler.style.color = 'red'
            }
        })
    }

    getMarkup() {
        const markup = `<div class="navigation-menu" id="mobile-menu">
        <div class="overlay"></div>
        <div class="sidebar">
          <div class="avatar round"></div>
          <div class="username">
            @ivan
          </div>
          <ul>
            <li><a href="/me" ripple-effect>profile</a></li>
            <li><a href="/settings" custom-link ripple-effect>settings</a></li>
            <!--          <li><a href=""></a></li>-->
            <li><div id="sidebar-theme-toggle" ripple-effect>toggle theme</div></li>
          </ul>
        </div>
      </div>`

      return markup
    }
}

customElements.define('sidebar-component', SidebarComponent);