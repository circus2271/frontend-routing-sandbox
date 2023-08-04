import {getData} from "./helpers.mjs";

class ParallaxImage extends HTMLElement {
  constructor() {
    super();

    this.gap = 50;
    this.onScroll = this.onScroll.bind(this)
  }

  connectedCallback() {
    this.image = this.querySelector('img')
    this.image.style.position = 'relative'
    this.imageHeight =
//      this.image.style.transform = `translateY(${this.image.getBoundingClientRect().bottom})px`
//      console.log(this.image)

      window.addEventListener('scroll', this.onScroll, {passive: true})
  }

  onScroll(e) {
//        console.log('i', this.image)
//        console.log(this.image.getBoundingClientRect().top)
//        console.log(this.image.getBoundingClientRect().top)
//        const topY = this.image.getBoundingClientRect().top
    const bottomY = this.image.getBoundingClientRect().bottom

    if (bottomY > 0) {
//          if (bottomY + this.gap > 0) {
      //            console.log(topY)
//            this.image.style.top = -bottomY / 10 + 'px'
//        this.image.style.top = bottomY / 5 + 'px'
//        this.image.style.top = 10 + 'px'
    }
  }

  disconnectedCallback() {
    window.removeEventListener('scroll', this.onScroll)
  }
}

customElements.define('parallax-image', ParallaxImage)


class AvailableGroups extends HTMLElement {
  constructor() {
    super();
  }

  async connectedCallback() {
    this.data = await getData()
    console.log(this.data)
    const { groups } = this.data

  }
}

customElements.define('available-groups', AvailableGroups)