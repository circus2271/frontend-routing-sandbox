import {getData, urlChange, defaultTimeout} from "./_helpers";
//import * as images from '~/src/assets/media/images/**/*.png';
//import  images from '../media/images/**/*';
//import images from '../media/images/**/*.png';
//console.log('images:', images)

class ParallaxImage extends HTMLElement {
  placeholder: any;
  image: any;
  gap: number;

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
    this.showImage()
    //    setTimeout(() => {
    //      this.loader.style.display = 'none'
    //      this.image.style.opacity = 1
    // //        }, 1500)
    //        }, defaultTimeout)

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

  onUrlChange = (event) => {
    this.showImage()
  }

  showImage = async () => {
    this.image.style.opacity = 0;

//    const {pathname} = location;
    //    alert(pathname)
    //    const {newLocation} = event.detail
    //    ['Jim_Jarmush_movie_screenshot.png', 'electronic_bandcamp.png'].forEach(src => {
    //      const image = new Image()
    //      image.onload = () => console.log('loaded:', src)
    //      image.src = new URL('~/src/assets/media/images/' + src, import.meta.url);
    //    })
    //    const { pathname } = location

//    alert(location.pathname)
    switch (location.pathname) {
      case '/':
        this.image.src = new URL('~/src/assets/media/images/tramvai_bandcamp_header_image.png', import.meta.url);
        break;
      case '/about':
        this.image.src = new URL('~/src/assets/media/images/about_page_image.png', import.meta.url);
        break;
      default:
        const urlParts = location.pathname.split('/').filter(part => part !== '')

        if (urlParts.length === 1) {
          const possibleGroupName = urlParts[0]

          const data = await getData()

          const currentGroup = data.groups?.filter(group => {
            return group.groupName === possibleGroupName
          })[0]

//          alert(currentGroup.groupName)
          if (currentGroup.coverImage) {
            this.image.onerror = () => {
              // set default
              this.image.src = new URL('~/src/assets/media/images/about_page_image.png', import.meta.url);
            }

            this.image.src = currentGroup.coverImage
          }

          if (!currentGroup.coverImage) {
            this.image.src = new URL('~/src/assets/media/images/about_page_image.png', import.meta.url);
          }
        }

        if (urlParts.length > 1) {
          // set placeholder
          this.image.src = new URL('~/src/assets/media/images/about_page_image.png', import.meta.url);
        }
    }


    setTimeout(() => {
      this.image.style.opacity = 1;
    }, defaultTimeout)
  }

  disconnectedCallback() {
    window.removeEventListener('scroll', this.onScroll)
    window.removeEventListener(urlChange, this.onUrlChange)
  }
}

customElements.define('parallax-image', ParallaxImage)


class AvailableGroups extends HTMLElement {
  data: any;
  
  constructor() {
    super();
  }

  async connectedCallback() {
    this.data = await getData()
//    console.log(this.data)
//    const currentGroup = data.groups?.filter(group => {
//      return group.groupName === groupName
//    })[0]
//    const {groupName} = currentGroup
    const {groups} = this.data

    let groupsHtml = ``
    groups.forEach(group => {
      const {groupName} = group
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
    }, defaultTimeout)
  }
}

customElements.define('available-groups', AvailableGroups)


//class AvailableAlbums extends HTMLElement {
//  constructor() {
//    super();
//  }
//}