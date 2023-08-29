import { urlChange } from '../modules/routing';

class BackButton extends HTMLElement {
  anchor: HTMLAnchorElement

  constructor() {
    super();
  }

  connectedCallback() {
    this.anchor = this.querySelector('a')
    this.updateUi();

    window.addEventListener(urlChange, this.onUrlChange)
  }

  setCustomProperty = () => {
    const wrapper = document.getElementById('app-bar__left-side');
    // getComputedStyle($0).getPropertyValue('--offset-left')
    // getComputedStyle(wrapper).getPropertyValue('--offset-left')
    // 0.style.setProperty('--offset-left', 12)

    // onResize(update)
  }

  updateUi = () => {

    const urlParts = location.pathname.split('/').filter(part => part !== '');

    const wrapper = document.getElementById('app-bar__left-side');
    if (urlParts.length === 0) {
      wrapper.classList.remove('visible')
      this.anchor.setAttribute('href', '/')
    } else if (urlParts.length === 1) {
      wrapper.classList.add('visible')

      this.anchor.setAttribute('href', '/')
    } else {
      wrapper.classList.add('visible')

      // slice returns new array (from start, to end (not included))
      const newUrl = urlParts.slice(0, urlParts.length - 1 ).join('');
      this.anchor.setAttribute('href', '/' + newUrl)
    }
  }

  onUrlChange = () => {
    this.updateUi()
  }

  disconnectedCallback() {
    window.removeEventListener(urlChange, this.onUrlChange)
  }
}

customElements.define('back-button', BackButton)
