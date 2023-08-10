import { urlChange } from '../_helpers';

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

  updateUi = () => {

    const urlParts = location.pathname.split('/').filter(part => part !== '');

    if (urlParts.length === 0) {
      this.classList.remove('visible')
      this.anchor.setAttribute('href', '/')
    } else if (urlParts.length === 1) {
      this.classList.add('visible')
      this.anchor.setAttribute('href', '/')
    } else {
      this.classList.add('visible')

      // slice returns new array (from start, to end (not included))
      const newUrl = urlParts.slice(0, urlParts.length - 1 ).join('');
      this.anchor.setAttribute('href', '/' + newUrl)
      // const lastUrlPart = urlParts[urlParts.length - 1]
      // const newUrl =
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
