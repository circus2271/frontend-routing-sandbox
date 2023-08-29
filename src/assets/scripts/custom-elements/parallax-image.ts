import { defaultTimeout, getData, getGroup, GroupInfo } from '../modules/helpers';
import { getCurrentPageInfo, RouteInfo, RouteName, urlChange } from '../modules/routing';

class ParallaxImage extends HTMLElement {
  placeholder: any;
  image: any;
  gap: number;
  currentRoute: RouteName;
  currentPageInfo: RouteInfo;
  placeholderImage = new URL('~/src/assets/media/images/about_page_image.png', import.meta.url);

  constructor() {
    super();

    this.gap = 50;
  }

  async connectedCallback() {
    this.placeholder = this.querySelector('.loader')
    this.image = this.querySelector('img')
    //    this.image.style.position = 'relative'
    await this.getRouteInfo()
    this.updateImage()
    this.logCurrentPage()

    window.addEventListener('scroll', this.onScroll, {passive: true})
    window.addEventListener(urlChange, this.onUrlChange)
  }

  getRouteInfo = async () => {
    this.currentPageInfo = await getCurrentPageInfo()
    this.currentRoute = this.currentPageInfo.routeName
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

  onUrlChange = async (event) => {
    await this.getRouteInfo()
    this.updateImage()

    this.logCurrentPage()
  }

  updateImage = async () => {
    this.image.classList.remove('visible')
    this.image.src = ''


//    this.image.onload = () => {
//      this.image.classList.add('visible')
//    }

    this.image.onerror = () => {
      // set default
      this.image.src = new URL('~/src/assets/media/images/about_page_image.png', import.meta.url);
    }

    switch (this.currentRoute) {
      case 'home':
        this.image.src = new URL('~/src/assets/media/images/tramvai_bandcamp_header_image.png', import.meta.url);
        break;
      case 'about':
        this.image.src = new URL('~/src/assets/media/images/about_page_image.png', import.meta.url);
        break;
      case '404':
        this.image.src = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2F6uGhT1O4sxpi8%2Fgiphy.gif&f=1&nofb=1&ipt=b96e0ddcdfcb38b309c35458e82657e6dc312d36f077673b6ad16486fbfca126&ipo=images'
        break;
      case 'group-page':
        const currentGroup = this.currentPageInfo.data as GroupInfo

        if (currentGroup.coverImage) {
          this.image.src = currentGroup.coverImage
        }

        if (!currentGroup.coverImage) {
          this.image.src = this.placeholderImage;
        }

        break;
      case 'album-page':
      default:
        // set placeholder
        this.image.src = this.placeholderImage
    }


    setTimeout(() => {
        this.image.classList.add('visible')
      }, defaultTimeout
    )
  }

  logCurrentPage = async () => {
    // const {routeName} = await getCurrentPageInfo()
    console.log('current page:', this.currentRoute)
  }

  disconnectedCallback() {
    window.removeEventListener('scroll', this.onScroll)
    window.removeEventListener(urlChange, this.onUrlChange)
  }
}

customElements.define('parallax-image', ParallaxImage)
