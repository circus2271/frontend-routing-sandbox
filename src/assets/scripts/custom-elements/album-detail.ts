import { urlChange } from '../modules/routing';
import { getCurrentPageInfo, RouteInfo, RouteName } from '../modules/routing';
import { AlbumRelatedInfo } from '../modules/helpers';

class AlbumDetail extends HTMLElement {
  currentPageInfo: RouteInfo
  currentRoute: RouteName
  albumRelatedInfo: AlbumRelatedInfo | null

  constructor() {
    super();
  }

  async connectedCallback() {
    const { visible } = await this.toggleVisibility()
    if (visible) {
      this.renderHTML()
    }

    window.addEventListener(urlChange, this.onUrlChange)
  }

  onUrlChange = async () => {
    const { visible } = await this.toggleVisibility()
    if (visible) {
      this.renderHTML()
    }
  }

  toggleVisibility = async (): Promise<{ visible: boolean }> => {
    await this.getRouteInfo()

    if (this.currentRoute === 'album-page') {
      this.classList.add('visible')

      return { visible: true }
    }

    this.classList.remove('visible')
    return { visible: false }
  }

  getRouteInfo = async () => {
    this.currentPageInfo = await getCurrentPageInfo()
    this.currentRoute = this.currentPageInfo.routeName

    if (this.currentRoute === 'album-page') {
      this.albumRelatedInfo = this.currentPageInfo.data as AlbumRelatedInfo
    } else {
      this.albumRelatedInfo = null
    }
  }

  renderHTML = () => {
    const album = this.albumRelatedInfo.albumInfo
    const group = this.albumRelatedInfo.groupInfo

    this.innerHTML = `
      <album-cover 
        class="album-detail__album-cover" 
        image-src="${album.coverImage}">
      </album-cover>
        
      <div class="album-info">
        <div class="album-name">
          ${album.albumName || 'default value album name'}
        </div>
        <div class="group-name">
          ${group.groupName || 'default value group name'}
        </div>
        <div class="date-of-release">
          ${album.release || 'bay'}
          // ${album.release || 'default release date'}
        </div>
      </div>
    `
  }

  disconnectedCallback() {
    window.removeEventListener(urlChange, this.onUrlChange)
  }
}

customElements.define('album-detail', AlbumDetail)
