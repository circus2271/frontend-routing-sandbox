import {getData, urlChange} from "./_helpers";

class ParallaxImage extends HTMLElement {
  constructor() {
    super();

    this.gap = 50;
//    this.onScroll = this.onScroll.bind(this)
//    this.onUrlChange = this.onUrlChange.bind(this)
  }

  connectedCallback() {
    this.placeholder = this.querySelector('.loader')
    this.image = this.querySelector('img')
//    this.image.style.position = 'relative'

    setTimeout(() => {
//      this.loader.style.display = 'none'
      this.image.style.opacity = 1
    }, 1500)
//    alert(import.meta.url)
//    this.image.src = new URL('../../images/b2_train_gimp.png', import.meta.url);
//    this.image.src = new URL('~/src/assets/media/images/b2_train_gimp.png', import.meta.url);

//    this.imageHeight =
//      this.image.style.transform = `translateY(${this.image.getBoundingClientRect().bottom})px`
//      console.log(this.image)

    window.addEventListener('scroll', this.onScroll, {passive: true})
    window.addEventListener(urlChange, this.onUrlChange, {passive: true})
  }

  onScroll = (e) => {
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

  onUrlChange = () => {
    this.image.style.opacity = 0;

    setTimeout(() => {
      this.image.src = new URL('~/src/assets/media/images/b2_train_gimp.png', import.meta.url);
      this.image.style.opacity = 1;
    }, 1500)

  }

  disconnectedCallback() {
    window.removeEventListener('scroll', this.onScroll)
    window.removeEventListener('scroll', this.onUrlChange)
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
//    const currentGroup = data.groups?.filter(group => {
//      return group.groupName === groupName
//    })[0]
//    const {groupName} = currentGroup
    const {groups} = this.data

    let groupsHtml = ``
    groups.forEach(group => {
      const { groupName } = group
      groupsHtml += `
        <li>
          <a href="/${groupName}">
            ${groupName}
          </a>
        </li>
      `
    })

    const content = this.querySelector('.content')

    setTimeout(() => {

//    content.innerHTML = `
//        <ul>
//          ${groupsHtml}
//        </ul>
//      </section>
//    `
    }, 1500)
  }
}

customElements.define('available-groups', AvailableGroups)


//class AvailableAlbums extends HTMLElement {
//  constructor() {
//    super();
//  }
//}