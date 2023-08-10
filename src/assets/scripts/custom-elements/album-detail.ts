// import { urlChange } from '../_helpers';
//
// class AlbumDetail extends HTMLElement {
//   albumCover: HTMLDivElement
//   albumName: HTMLDivElement
//   groupName: HTMLDivElement
//   albumReleaseDate = HTMLDivElement
//
//   constructor() {
//     super();
//   }
//
//   async connectedCallback() {
//     // alert(1)
//     this.albumCover = this.querySelector('.album-cover')
//     this.albumName = this.querySelector('.album-name')
//     this.groupName = this.querySelector('.group-name')
//     this.albumReleaseDate = this.querySelector('.date-of-release')
//
//     await new Promise(resolve => {
//       setTimeout(()=>{
//         alert(12)
//       ;resolve()
//       }, 10000)
//     })
//     // this.albumCover.innerHTML = 'fdfs'
//     this.albumName.innerHTML = 'fdfs'
//     this.groupName.innerHTML = 'fdfs'
//     this.albumReleaseDate.innerHTML = 'fdfs'
//     // alert(2)
//     window.addEventListener(urlChange, this.onUrlChange)
//   }
//
//   onUrlChange = () => {
//   }
//
//   disconnectedCallback() {
//     window.removeEventListener(urlChange, this.onUrlChange)
//   }
// }
//
// customElements.define('album-detail', AlbumDetail)
