type Theme = 'default' | 'light' | 'dark'



const disableRipples = () => settings.ripplesDisabled = true
const enableRipples = () => settings.ripplesDisabled = false
const toggleRippleEffectSetting = () => {
    settings.ripplesDisabled = !settings.ripplesDisabled

    localStorage.setItem('ripplesDisabled', `${settings.ripplesDisabled}`)
}

const getRippleEffectStatus = (): true | false => {
    let enabled = true
    if (localStorage.getItem('ripplesDisabled') === 'false') {
        enabled = false
    }

    return enabled
}


const getCurrentTheme = () => {
    const userDefinedTheme = localStorage.getItem('currentTheme')

    // const preferredTheme = matchMedia('(prefers-color-scheme: dark').matches && ThemeOptions.Dark
    const preferredTheme = matchMedia('(prefers-color-scheme: dark').matches && 'dark'


    return userDefinedTheme || preferredTheme
}

// it's set in <head> element
// document.documentElement.style.setProperty('--currentTheme', getCurrentTheme())

const setTheme = (theme: Theme) => {
// const setTheme = (theme: ThemeOptions) => {
    localStorage.setItem('currentTheme', theme)
    // document.body.style.setProperty('--currentTheme', theme)
    document.documentElement.style.setProperty('--currentTheme', theme)
    // document.body.setAttribute('currentTheme', theme)
    settings.theme = theme
}

const toggleTheme = () => {
    // const currentTheme
    // const currentTheme = settings.theme()
    const currentTheme = getCurrentTheme()

    const newTheme: Theme = currentTheme === 'default' || currentTheme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)

    return newTheme
}

const themeToggle = document.querySelector<HTMLElement>('#theme-toggle')
themeToggle.onclick = () => toggleTheme()

type Settings = {
    prefersReducedAnimation: () => boolean,
    // theme: () => Theme
    theme: Theme,
    ripplesDisabled: true | false,
    language: 'russian' | 'english'
    // language: Language
}

// type Language = 'russian' | 'english'

export const settings: Settings = {
    prefersReducedAnimation: () => matchMedia('(prefers-reduced-motion)').matches,
    // theme: () => getCurrentTheme()
    theme: getCurrentTheme() as Theme,
    // ripplesDisabled: false,
    ripplesDisabled: getRippleEffectStatus(),
    // language: 'russian' | 'english'
    // language: 'russian' | 'english'
    language: 'english'
}

// const getTogglerComponentMarkup = () => {
//
// }

class SsttingsElement extends HTMLElement {
    state: Settings

    constructor() {
        // Always call super first in constructor
        super();
        // alert(4)

        this.state = settings
    }

    connectedCallback() {
        this.innerHTML = this.getMarkup()
// debugger
        const toggleToggler = togglerParent => {
            const toggler = togglerParent.querySelector('.settings-toggler')
            if (toggler.hasAttribute('turned-on')) {
                toggler.removeAttribute('turned-on')
            } else {
                toggler.setAttribute('turned-on', '')
            }
        }
        // ...
        this.querySelector<HTMLElement>('#theme-toggle').onclick = (e) => {
            if ((e.currentTarget as HTMLElement).hasAttribute('disabled')) return
            toggleToggler(e.currentTarget)
            toggleTheme()
        }
        // this.querySelector('#reduced-motion-setting').onclick = toggleTheme
        this.querySelector<HTMLElement>('#ripple-effect-setting').onclick = (e) => {
            if ((e.currentTarget as HTMLElement).hasAttribute('disabled')) return
            toggleToggler(e.currentTarget)
            toggleRippleEffectSetting()
        }

    }

    getMarkup() {
        // @ts-ignore
        // @ts-ignore
        const markup = `
          <div class="settings-wrapper wrapper">
            <div class="gear-icon"></div>
            <ul class="settings-list">
              <h2 class="setting-list__header">Settings</h2>
              <li id="theme-toggle">
                <div class="setting-name">
                  dark theme
                </div>
<!--                <settings-toggler></settings-toggler>-->
                <div class="settings-toggler" ${this.state.theme === 'dark' && 'turned-on'}>
                  <div class="tumbler-wrapper">
                    <div class="tumbler"></div>
                  </div>
                </div>
              </li>
              <li id="reduced-motion-setting" disabled>
                <div class="setting-name">
                  reduced motion (reduced animations)
                </div>
                <div class="settings-toggler" ${this.state.prefersReducedAnimation() && 'turned-on'}>
                  <div class="tumbler-wrapper">
                    <div class="tumbler"></div>
                  </div>
                </div>
              </li>
              <li id="ripple-effect-setting">
                <div class="setting-name">
                  ripple effect
                </div>
                <div class="settings-toggler" ${!this.state.ripplesDisabled && 'turned-on'}>
<!--                  <div class="tumbler-wrapper" onclick="toggleTheme">-->
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
customElements.define("settings-component", SsttingsElement);