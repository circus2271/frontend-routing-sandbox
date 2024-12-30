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
            if (e.target instanceof HTMLAnchorElement) {
                if (e.target.hasAttribute('custom-link')) {
                    e.preventDefault()

                    const { pathname } = e.target

                    const nextRoute = this.routes.find(r => r.relativePath === pathname)
                    const canNavigate = nextRoute.canNavigate()

                    // nextRoute.redirectTo = '/about'
                    if (!canNavigate) {
                        // const r = nextRoute.redirectTo
                        setTimeout(() => {
                            // location.pathname = r
                            history.pushState({}, '', nextRoute.redirectTo)

                        }, 2000)

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
    window.scrollTo({ top: 0, behavior: 'smooth'})
})