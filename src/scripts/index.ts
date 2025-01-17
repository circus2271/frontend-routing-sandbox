import './custom-elements'
import Ripple from './modules/Ripple'
import {settings} from "./custom-elements/settings-component";
import {contentWrappers} from "./custom-elements";
import {users} from './mock-data'
import {Post} from "./custom-elements/PostComponent";

const ripple = new Ripple()


type Route = {
    relativePath: string,
    onNavigate?: () => void,
    canNavigate: () => boolean,
    redirectTo?: string,
    // don't know if it's needed
    // maybe "canNavigate" can solve this
//     shouldRedirect? () => boolean,
    beforeNavigate?: () => Promise<void>,
    beforeLeave?: () => void,

    component?: string,
    // 'dynamic-route': boolean
}

const staticRoutes: Route[] = [
    {
        relativePath: '/',
        canNavigate: () => true
    },
    {
        relativePath: '/about',
        canNavigate: () => true
    },
    {
        // user profile page
        // relativePath: '/@ivan',
        // startsWith: '/@',
        relativePath: '',
        component: 'user-page',
        canNavigate: () => {
            // if user is logged in and if user navigates his profile page
            // if (currentUser === username) {
            //     // redirectTo /me page
            //     return false
            //  }

            return true
        },
        // redirectTo: '/me',
        beforeNavigate: async () => {
            document.querySelector('user-profile-component').setAttribute('visible', '')
        }
    },
    {
        relativePath: '',
        component: 'user-post',
        canNavigate: () => true,
        beforeNavigate: async () => {}
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

// const navigate = () => {
//
// }

class Router {
    staticRoutes: Route[] = staticRoutes
    beforeNavigateFunctionsStack: (() => Promise<void>)[] = []

    constructor() {
        addEventListener('popstate', async () => {
            const mobileMenu = document.querySelector('#mobile-menu')
            if (mobileMenu.classList.contains('visible')) {
                mobileMenu.classList.remove('visible')
            }

            const { pathname } = window.location

            await this.navigate(pathname)
        })

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


            // ...
            if (e.target instanceof HTMLAnchorElement || (e.target as HTMLElement).closest('a')) {
                const anchor = e.target instanceof HTMLAnchorElement ? e.target : (e.target as HTMLElement).closest('a')

                if (anchor.hasAttribute('custom-link')) {
                    // let dynamicRoute = false;
                    // let userProfilePage = false;
                    // let userPostPage = false

                    const { pathname } = anchor

                    await this.navigate(pathname)
                }
            }
        })
    }

    // update ui, and do some stuff actually. not only naviagte
    async navigate(pathname: string) {
        let nextRoute = this.staticRoutes.find(r => r.relativePath === pathname)
        if (!nextRoute) {
            // check if it's user profile page
            // const urlParts = location.pathname.split('/').filter(l !== '')
            const urlParts = pathname.split('/').filter(l => l !== '');
            if (urlParts[0].startsWith('@')) {
                // it's user based page
                const user = users.find(user => user.username === urlParts[0])

                if (urlParts.length === 1) {
                    // maybe check if user is current logged in user
                    // if so, maybe redirect to /me page url
                    // .. for now, just open page of this user

                    if (user) {
                        // dynamicRoute = true
                        // userProfilePage = true
                        // debugger

                        // maybe it's too verbose
                        if (urlParts[0] === user.username) {
                            nextRoute = {
                                // relativePath: user.loggedIn ? '/me' : `/${user.username}`,
                                relativePath: `/${user.username}`,
                                canNavigate: () => true,
                                beforeNavigate: async () => {
                                    const userComponent = document.querySelector('user-profile-component')

                                    // maybe it's better to use some js object to store current state,
                                    // for example: state = {currentActivePage: 'userProfilePage', profile: user }
                                    userComponent.setAttribute('username', user.username)
                                    userComponent.setAttribute('email', user.email)
                                    userComponent.setAttribute('name', user.name)

                                    userComponent.setAttribute('visible', '')
                                }
                            }
                        }
                    }
                }

                if (urlParts.length === 2) {
                    // it's probably a user's post component
                    // find user and find users post
                    if (user) {
                        // get users post data
                        // const post = user.posts.find((post: Post) => post.slug === urlParts[1])
                        const post = user.posts.find(p => p.slug === urlParts[1])

                        nextRoute = {
                            // relativePath: user.loggedIn ? '/me' : `/${user.username}`,
                            relativePath: `/${user.username}/${post.slug}`,
                            canNavigate: () => true,
                            beforeNavigate: async () => {
                                const singlePostComponent = document.querySelector('post-component')

                                // TODO: maybe add a state object, so you don't have to pass this values as attributes
                                singlePostComponent.setAttribute('slug', post.slug)
                                singlePostComponent.setAttribute('title', post.title)
                                singlePostComponent.setAttribute('description', post.description)
                                singlePostComponent.setAttribute('date', post.date)
                                // make this component visible
                                singlePostComponent.setAttribute('visible', '')
                            }

                        }
                    }
                }
            }
        }

        const canNavigate = nextRoute.canNavigate()

        if (!canNavigate) {
            // const r = nextRoute.redirectTo
            // setTimeout(() => {
            // location.pathname = r
            history.pushState({}, '', nextRoute.redirectTo)

            // }, 2000)

            return
        }

        for await (const callback of this.beforeNavigateFunctionsStack) {
            await callback()
        }
        await nextRoute.beforeNavigate?.()
        history.pushState({}, '', nextRoute.relativePath)
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

const hideAllComponents = () => {
    contentWrappers.forEach(component => hideComponent(component))
}

router.addFunctionToBeforeNavigateFunctionStack(async () => {
    hideAllComponents()
})

