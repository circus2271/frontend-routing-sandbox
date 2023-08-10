import { defaultTimeout, getAllAlbums, getData } from '../_helpers';

class AvailableAlbums extends HTMLElement {
  data: any;

  constructor() {
    super();
  }

  async connectedCallback() {
    this.data = await getData()

    const urlParts = location.pathname.split('/').filter(part => part !== '')

    if (urlParts.length === 0) {
      const availableAlbums = await getAllAlbums()

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
  }
}

customElements.define('available-albums', AvailableAlbums)