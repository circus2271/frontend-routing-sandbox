import { getData, urlChange, defaultTimeout } from "./_helpers";

class ParallaxImage extends HTMLElement {
  placeholder: any;
  image: any;
  gap: number;

  constructor() {
    super();

    this.gap = 50;
  }

  connectedCallback() {
    this.placeholder = this.querySelector('.loader')
    this.image = this.querySelector('img')
    //    this.image.style.position = 'relative'
    this.updateImage()

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
    this.updateImage()
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

          if (currentGroup.coverImage) {
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
      this.image.classList.add('visible')
    }, defaultTimeout)
  }

  disconnectedCallback() {
    window.removeEventListener('scroll', this.onScroll)
    window.removeEventListener(urlChange, this.onUrlChange)
  }
}

customElements.define('parallax-image', ParallaxImage)


// class AvailableGroups extends HTMLElement {
//   data: any;
//
//   constructor() {
//     super();
//   }
//
//   async connectedCallback() {
//     this.data = await getData()
// //    console.log(this.data)
// //    const currentGroup = data.groups?.filter(group => {
// //      return group.groupName === groupName
// //    })[0]
// //    const {groupName} = currentGroup
//     const {groups} = this.data
//
//     let groupsHtml = ``
//     groups.forEach(group => {
//       const {groupName} = group
//       groupsHtml += `
//         <li>
//           <a href="/${groupName}">
//             ${groupName}
//           </a>
//         </li>
//       `
//     })
//
// //    const content = this.querySelector('.content')
//     const listWrapper = this.querySelector('.content .list-wrapper')
//
// //    listWrapper.log
//     setTimeout(() => {
//
//       listWrapper.innerHTML = `
//         <ul>
//           ${groupsHtml}
//         </ul>
//       `
//
//       listWrapper.classList.add('visible')
//     }, defaultTimeout)
//   }
// }
//
// customElements.define('available-groups', AvailableGroups)
//

//class AvailableAlbums extends HTMLElement {
//  constructor() {
//    super();
//  }
//}

class AvailableAlbums extends HTMLElement {
  data: any;

  constructor() {
    super();
  }

  async connectedCallback() {
    this.data = await getData()

    const urlParts = location.pathname.split('/').filter(part => part !== '')

    if (urlParts.length === 0) {
      const availableAlbums = []

      this.data.groups?.forEach(group => {
        const albums = [...group.albums]
        if (albums) {
          albums.forEach(album => {
            // alert(group.groupName)
            album.groupName = group.groupName             //...
            availableAlbums.push(album)
            // debugger
          })
        }
      })

      console.log(availableAlbums)
      let html = ``
      availableAlbums.forEach(album => {
        html += `
          <li>
               <div class="album-cover">
                 <!--<img src="">-->
               </div>
               <a href="/${album.groupName}/${album.albumName}">
                 ${album.albumName} wow
               </a>
             </li>
        `
      })

      const listWrapper = this.querySelector('.content .list-wrapper')
      listWrapper.innerHTML = `<ul>${html}</ul>`
      // listWrapper.style.display = 'block'

      setTimeout(() => {
        // listWrapper.style.display = 'block'
        listWrapper.classList.add('visible')
      }, defaultTimeout)
    }

//     if (urlParts.length === 1) {
//       const possibleGroupName = urlParts[0]
//
//       const data = await getData()
//
//       const currentGroup = data.groups?.filter(group => {
//         return group.groupName === possibleGroupName
//       })[0]
//
//       const albums = currentGroup.albums
//       if (albums) {
//         let albumsHTML = ``
//         albums.forEach(album => {
//           // const { albumName } = album;
//           albumsHTML += `
//             <li>
//               <div class="album-cover">
//                 <!--<img src="">-->
//               </div>
// <!--              <a href="/group10/album-1">-->
// <!--                blabala album 1-->
// <!--              </a>-->
//               <a href="${possibleGroupName}/${album.albumName}">
//                 blabala album 1
//               </a>
//             </li>
//           `
//         })
//
//         const listWrapper = this.querySelector('.content .list-wrapper')
//         listWrapper.innerHTML = `
//           <ul>
//             ${albumsHTML}
//           </ul>
//         `
//       }
//     }


  }



  // if (currentAlbum) {
  //
  // }


  //    const content = this.querySelector('.content')
  // const listWrapper = this.querySelector('.content .list-wrapper')

  //    listWrapper.log
  // setTimeout(() => {
  //
  //   listWrapper.innerHTML = `
  //     <ul>
  //       ${groupsHtml}
  //     </ul>
  //   `
  //
  //   listWrapper.classList.add('visible')
  // }, defaultTimeout)

}

customElements.define('available-albums', AvailableAlbums)
