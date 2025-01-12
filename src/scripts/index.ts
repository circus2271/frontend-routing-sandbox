import './custom-elements'
import Ripple from './modules/Ripple'
import {settings} from "./custom-elements/settings-component";
import {contentWrappers} from "./custom-elements";

const ripple = new Ripple()


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
        canNavigate: () => true,
        beforeNavigate: async () => {
            document.querySelector('settings-component').setAttribute('visible', '')
        }
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

// const handleComponentsVisibility = co
const showComponent = componentSelector => document.querySelector(componentSelector).setAttribute('visible', '')
const hideComponent = componentSelector => document.querySelector(componentSelector).removeAttribute('visible')

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

            const mobileMenu = document.querySelector('#mobile-menu')

            // handle sidebar appearance on click (if mobile sidebar is visible)
            const element = e.target instanceof HTMLElement && e.target
            if (mobileMenu.classList.contains('visible')) {

                // now because of adding an overlay this is barely possible
                const clickedOutsideOfMobileSidebar =  element.closest('#mobile-menu') === null
                if (clickedOutsideOfMobileSidebar) {
                    mobileMenu.classList.remove('visible')
                }
                // so
                if (element.classList.contains('overlay')) {
                    mobileMenu.classList.remove('visible')
                }

                const clickedInsideMobileMenuSidebar = !clickedOutsideOfMobileSidebar
                if (clickedInsideMobileMenuSidebar) {
                    const isAnchor = element instanceof HTMLAnchorElement
                    if (isAnchor) {
                        mobileMenu.classList.remove('visible')
                    }
                }
            } else {
                if (element.closest('#open-sidebar')) {
                //     // element is openSidebarButton
                //     // show menu
                    mobileMenu.classList.add('visible')
                }
            }


            if (e.target instanceof HTMLAnchorElement) {
                const anchor = e.target

                // if (anchor.closest('#mobile-menu')) {
                //     // close mobile menu if user clicked on a link inside mobile menu sidebar
                //     document.querySelector('#mobile-menu').classList.remove('visible')
                // }

                if (anchor.hasAttribute('custom-link')) {

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

    // beforeNavigate() {
    //     this.beforeNavigateFunctionsStack.forEach(f => f())
    //     // this.routes.forEach(route => route.beforeNavigate())
    // }

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

const hideAllComponents = () => {
    contentWrappers.forEach(component => hideComponent(component))
}

// router.addFunctionToBeforeNavigateFunctionStack(async () => {
//     const mobileMenu = document.querySelector('#mobile-menu')
//     // maybe it should be run if menu is open and click is inside that menu
//     mobileMenu.classList.remove('visible')
// })

router.addFunctionToBeforeNavigateFunctionStack(async () => {
    hideAllComponents()
})


// const sidebarButton = document.querySelector<HTMLElement>('#open-sidebar')
// if (sidebarButton) {
//     sidebarButton.onclick = () => {
//         // const mobileMenu = document.querySelector<HTMLElement>('#mobile-menu')
//         const mobileMenu = document.querySelector('#mobile-menu')
//         mobileMenu.classList.add('visible')
//     }
// }
//
// document.documentElement.addEventListener('click', e => {
//     const mobileMenu = document.querySelector('#mobile-menu')
//
//     if (mobileMenu.classList.contains('visible')) {
//         // ...
//         if (!((e.target as HTMLElement).closest('#mobile-menu'))) {
//             mobileMenu.classList.remove('visible')
//         }
//     }
// })
//
// document.addEventListener('click', e => {
//     const mobileMenu = document.querySelector('#mobile-menu')
//
//     if (mobileMenu.classList.contains('visible')) {
//         if (e.target instanceof HTMLElement && e.target.closest('#mobile-menu') === null) {
//             mobileMenu.classList.remove('visible')
//         }
//     }
//
// })