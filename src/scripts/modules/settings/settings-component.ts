import {settings} from './settings'
import {themeSwitchEvent} from '@modules/events'

class SettingsElement extends HTMLElement {
    // state = new Settings()
    state = settings

    constructor() {
        // Always call super first in constructor
        super();

        // this.state = settings
    }

    connectedCallback() {
        this.innerHTML = this.getMarkup()

        const toggleToggler = togglerParent => {
            const toggler = togglerParent.querySelector('.settings-toggler')
            if (toggler.hasAttribute('turned-on')) {
                toggler.removeAttribute('turned-on')
            } else {
                toggler.setAttribute('turned-on', '')
            }
        }

        themeSwitchEvent.registerCallback((event) => {

            const li = this.querySelector<HTMLElement>('#theme-toggle')
            const toggler = li.querySelector('.settings-toggler')

            if (toggler.hasAttribute('turned-on')) {
                toggler.removeAttribute('turned-on')
            } else {
                toggler.setAttribute('turned-on', '')
            }
        })

        // ...
        this.querySelector<HTMLElement>('#theme-toggle').onclick = (e) => {
            if ((e.currentTarget as HTMLElement).hasAttribute('disabled')) return
            // toggleToggler(e.currentTarget)
            // toggleTheme()
            // this.state.toggleTheme()
              themeSwitchEvent.dispatchEvent()
        }
        // this.querySelector('#reduced-motion-setting').onclick = toggleTheme
        this.querySelector<HTMLElement>('#ripple-effect-setting').onclick = (e) => {
            if ((e.currentTarget as HTMLElement).hasAttribute('disabled')) return
            toggleToggler(e.currentTarget)
            // toggleRippleEffectSetting()
            this.state.toggleRipples()
        }

        this.querySelector<HTMLElement>('#sidebar-position-setting-toggler').onclick = (e) => {
            if ((e.currentTarget as HTMLElement).hasAttribute('disabled')) return
            toggleToggler(e.currentTarget)
            // toggleRippleEffectSetting()
            this.state.toggleSidebarPosition()

        }
    }

    getMarkup() {
        const markup = `
          <div class="settings-wrapper wrapper">
            <div class="gear-icon"></div>
            <ul class="settings-list">
              <h2 class="setting-list__header">Settings</h2>
              <li id="theme-toggle">
                <div class="setting-name">
                  dark theme
                </div>
                <div class="settings-toggler" ${this.state.currentTheme === 'dark' && 'turned-on'}>
                  <div class="tumbler-wrapper">
                    <div class="tumbler"></div>
                  </div>
                </div>
              </li>
              <li id="reduced-motion-setting" disabled>
                <div class="setting-name">
                  reduced motion (reduced animations)
                </div>
                <div class="settings-toggler" ${this.state.prefersReducedAnimation && 'turned-on'}>
                  <div class="tumbler-wrapper">
                    <div class="tumbler"></div>
                  </div>
                </div>
              </li>
              <li id="ripple-effect-setting">
                <div class="setting-name">
                  ripple effect
                </div>
                <div class="settings-toggler" ${this.state.ripplesEnabled && 'turned-on'}>
                  <div class="tumbler-wrapper">
                    <div class="tumbler"></div>
                  </div>
                </div>
              </li>
          <li id="sidebar-position-setting-toggler">
                   <div class="setting-name">
                       sidebar position (left/right)
                   </div>
                   <div class="settings-toggler" ${(this.state.sidebarPosition === 'right') && 'turned-on'}>
                     <div class="tumbler-wrapper">
                       <div class="tumbler"></div>
                     </div>
                   </div>
                 </li>
                 <li id="language-setting-toggler" ${!(this.state.language === 'russian') && 'turned-on'} disabled>
                   <div class="setting-name">
<!--                     язык (русский/английский)-->
<!--                     language (russian/english)-->
                     language (english/russian)
                   </div>
                   <div class="settings-toggler">
                     <div class="tumbler-wrapper">
                       <div class="tumbler"></div>
                     </div>
                   </div>
                 </li>
            </ul>
          </div>
        `

        return markup
    }
}

// secret component
customElements.define("settings-component", SettingsElement);