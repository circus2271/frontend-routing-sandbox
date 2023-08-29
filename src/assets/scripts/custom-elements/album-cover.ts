class AlbumCover extends HTMLElement {
  image: HTMLImageElement;

  constructor() {
    super();
  }

  connectedCallback() {
    const src = this.getAttribute('image-src')

    this.image = document.createElement('img')
    this.image.onload = () => this.image.classList.add('visible')
    this.image.onerror = () => this.classList.add('image-error')
    this.image.src = src

    this.appendChild(this.image)
  }
}

customElements.define('album-cover', AlbumCover)
