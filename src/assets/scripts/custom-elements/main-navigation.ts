import { urlChange } from '../modules/routing';
import { getCurrentPageInfo, RouteInfo, RouteName } from '../modules/routing';

class MainNavigation extends HTMLElement {
  currentPageInfo: RouteInfo
  currentRoute: RouteName

  constructor() {
    super();
  }

  async connectedCallback() {
    await this.toggleVisibility()

    window.addEventListener(urlChange, this.onUrlChange)
  }

  getRouteInfo = async () => {
    this.currentPageInfo = await getCurrentPageInfo()
    this.currentRoute = this.currentPageInfo.routeName
  }

  onUrlChange = async () => {
    await this.toggleVisibility()
  }

  toggleVisibility = async () => {
    await this.getRouteInfo()

    if (this.currentRoute === 'album-page') {
      this.classList.remove('visible')

      return
    }

    this.classList.add('visible')
  }

  disconnectedCallback() {
    window.removeEventListener(urlChange, this.onUrlChange)
  }
}

customElements.define('main-navigation', MainNavigation)
