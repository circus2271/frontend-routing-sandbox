import { defaultTimeout, getAllAlbums, getData, getGroup } from '../modules/helpers';
import { getCurrentPageInfo, navigate, RouteInfo, RouteName, urlChange } from '../modules/routing';
import { GroupNotFoundError } from '../modules/custom-errors';

class AvailableAlbums extends HTMLElement {
  data: any;
  currentPageInfo: RouteInfo
  currentRoute: RouteName

  constructor() {
    super();
  }

  async connectedCallback() {
    await this.getRouteInfo()
    this.showAlbums()

    window.addEventListener(urlChange, this.onUrlChange)
  }

  onUrlChange = async () => {
    await this.getRouteInfo()
    this.showAlbums()
  }

  getRouteInfo = async () => {
    this.currentPageInfo = await getCurrentPageInfo()
    this.currentRoute = this.currentPageInfo.routeName
  }

  showAlbums = async () => {
    if (this.currentRoute === 'home') return this.showAllAlbums()
    if (this.currentRoute === 'group-page') return this.showGroupAlbums()

    this.hideAlbums()
  }

  showAllAlbums = async () => {
    this.data = await getData()

    const availableAlbums = await getAllAlbums()

    this.renderHTML(availableAlbums)
  }

  showGroupAlbums = async () => {
    const groupName = location.pathname.replace(/\//g, '')

    let group;
    try {
      group = await getGroup(groupName)
    } catch (error) {
      if (error instanceof GroupNotFoundError) {
        console.warn(error.message)
        navigate('/404')

        return
      }
    }

    const {albums} = group

    if (albums.length === 0) {
      console.log('there are no albums from this group')

      return
    }

    this.renderHTML(albums)
  }

  renderHTML = (albums) => {
    let html = ``
    albums.forEach(album => {
      html += `
        <li>
          <a href="/${album.groupName}/${album.albumName.split(' ').join('_')}">
            <album-cover class="available-albums__album-cover" image-src="${album.coverImage}">
            </album-cover>
              ${album.albumName} wow
          </a>
        </li>
      `
    })

    const listWrapper = this.querySelector('.content .list-wrapper')
    listWrapper.innerHTML = `<ul>${html}</ul>`

    setTimeout(() => {
      listWrapper.classList.add('visible')
    }, defaultTimeout)
  }

  hideAlbums = () => {
    this.classList.remove('visible')
  }

  disconnectedCallback() {
    window.removeEventListener(urlChange, this.onUrlChange)
  }
}

customElements.define('available-albums', AvailableAlbums)
