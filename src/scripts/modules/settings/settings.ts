
// const DEFAULT_THEME = 'dark'

export default class Settings {
    // theme is set in a head tag...
    private _currentTheme = localStorage.getItem('currentTheme')
    private _ripplesEnabled = localStorage.getItem('ripplesEnabled') === 'true'
    // language: 'russian' | 'english'
    private _language: 'english' | 'russian' = 'english'

    get prefersReducedAnimation() {
        return matchMedia('(prefers-reduced-motion)').matches
    }

    get language() {
        return this._language
    }

    get currentTheme() {
        return this._currentTheme
    }

    // set currentTheme(theme: 'light' | 'dark') {
    set currentTheme(theme: string) {
        localStorage.setItem('currentTheme', theme)
        document.documentElement.style.setProperty('--currentTheme', theme)
        this._currentTheme = theme
    }

    toggleTheme() {
        // it should trigger a set method
        this._currentTheme = this._currentTheme === 'light' ? 'dark' : 'light'
        document.documentElement.style.setProperty('--currentTheme', this._currentTheme)
    }

    disableRipples() {
        this._ripplesEnabled = false
        localStorage.setItem('_ripplesEnabled', `${this._ripplesEnabled}`)
    }

    enableRipples() {
        this._ripplesEnabled = true
        localStorage.setItem('_ripplesEnabled', `${this._ripplesEnabled}`)

    }

    toggleRipples() {
    // toggleRippleEffectSetting() {    
        this._ripplesEnabled = !this._ripplesEnabled

        localStorage.setItem('ripplesEnabled', `${this._ripplesEnabled}`)
    }

    get ripplesEnabled() {
        return this._ripplesEnabled || (localStorage.getItem('ripplesEnabled') === 'true')
    }

    // get areRipplesEnabled() {
    //     return this._ripplesEnabled || (localStorage.getItem('ripplesEnabled') === 'true')
    // }




    get rippleEffectStatus() {
      const enabled = localStorage.getItem('rippleEnabled') === 'true'

      return enabled
    }


// it's set in <head> element
// document.documentElement.style.setProperty('--currentTheme', getCurrentTheme())

    // set theme(theme: 'dark' | 'light') {
    //     localStorage.setItem('currentTheme', theme)
    //     settings.theme = theme
    // }
 
    
}

export const settings = new Settings()