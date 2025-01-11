import './custom-elements'
// import Ripple from 'material-ripple-effects'
import Ripple from './modules/Ripple'

const ripple = new Ripple()
// import './modules/routing';
// import './custom-elements'



type Route = {
    relativePath: string,
    onNavigate?: () => void,
    canNavigate: () => boolean,
    redirectTo?: string,
    beforeNavigate?: () => Promise<void>,
    beforeLeave?: () => void
}

const routes: Route[] = [
    {
        relativePath: '/',
        canNavigate: () => true
    },
    {
        relativePath: '/about',
        canNavigate: () => true
    },
    {
        relativePath: '/settings',
        canNavigate: () => true
    },
    {
        relativePath: '/with-slider',
        canNavigate: () => true,
        beforeNavigate: async () => alert('initialize slider')
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
    beforeNavigateFunctionsStack: (() => Promise<void>)[] = []

    constructor() {
        document.addEventListener('click', async (e) => {
            e.preventDefault()

            if (e.target instanceof HTMLElement && e.target.hasAttribute('ripple-effect')) {
                if (!settings.ripplesDisabled) {
                    // hello
                    ripple.create(e.target, settings.theme)
                }
            }

            if (e.target instanceof HTMLAnchorElement) {
                const anchor = e.target

                // ripple.create(anchor, settings.theme())
                // ripple.create(anchor, settings.theme())

                if (anchor.hasAttribute('custom-link')) {
                    // debugger

                    const { pathname } = anchor

                    const nextRoute = this.routes.find(r => r.relativePath === pathname)
                    const canNavigate = nextRoute.canNavigate()

                    // nextRoute.redirectTo = '/about'
                    if (!canNavigate) {
                        // const r = nextRoute.redirectTo
                        // setTimeout(() => {
                            // location.pathname = r
                            history.pushState({}, '', nextRoute.redirectTo)

                        // }, 2000)

                        return
                    }

                    // this.beforeNavigateFunctionsStack.forEach(f => f())
                    for await (const callback of this.beforeNavigateFunctionsStack) {
                        await callback()
                    }
                    await nextRoute.beforeNavigate?.()
                    history.pushState({}, '', nextRoute.relativePath)
                }
            }
        })
    }

    beforeNavigate() {
        this.beforeNavigateFunctionsStack.forEach(f => f())
        // this.routes.forEach(route => route.beforeNavigate())
    }

    // register before navigation callbacks
    addFunctionToBeforeNavigateFunctionStack(func: () => Promise<void>) {
        this.beforeNavigateFunctionsStack.push(func)
    }
}

export const router = new Router()

router.addFunctionToBeforeNavigateFunctionStack(async () => {
    const scrollBehaviour = settings.prefersReducedAnimation() ? 'instant' : 'smooth'

    window.scrollTo({top: 0, behavior: scrollBehaviour})
})

router.addFunctionToBeforeNavigateFunctionStack(async () => {
    const mobileMenu = document.querySelector('#mobile-menu')
    // maybe it should be run if menu is open and click is inside that menu
    mobileMenu.classList.remove('visible')
})


document.querySelector<HTMLElement>('#open-settings').onclick = () => {
    // const mobileMenu = document.querySelector<HTMLElement>('#mobile-menu')
    const mobileMenu = document.querySelector('#mobile-menu')
    mobileMenu.classList.add('visible')
}