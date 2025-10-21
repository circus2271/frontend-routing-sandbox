
export type Route = {
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
    name?: string
}