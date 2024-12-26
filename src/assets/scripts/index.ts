// import './modules/routing';
// import './custom-elements'


type Route = {
    relativePath: string,
    onNavigate?: () => void,
    canNavigate: () => boolean,
    redirectTo?: string
}

const routes: Route[] = [
    {
        relativePath: '/',
        canNavigate: () => true
    },
    {
        relativePath: '/group10/album-1',
        canNavigate: () => false,
        // redirectTo: '/',
        redirectTo: '/login'
    },
]

class Router {
    routes: Route[] = routes

    constructor() {
        document.addEventListener('click', e => {
            if (e.target instanceof HTMLAnchorElement) {
                if (e.target.hasAttribute('custom-link')) {
                    e.preventDefault()

                    const { pathname } = e.target

                    const nextRoute = this.routes.find(r => r.relativePath === pathname)
                    const canNavigate = nextRoute.canNavigate()

                    // nextRoute.redirectTo = '/about'
                    if (!canNavigate) {
                        const r = nextRoute.redirectTo
                        setTimeout(() => {
                            // location.pathname = r
                            history.pushState({}, '', nextRoute.redirectTo)

                        }, 2000)

                    }
                }
            }
        })
    }
}

export const router = new Router()