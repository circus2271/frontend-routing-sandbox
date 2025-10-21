import {showComponent} from './utils'
import {Route} from './types'

// export const staticRoutes: Route[] = [
export const staticRoutes: Route[] = [
    {
        relativePath: '/',
        canNavigate: () => true,
        beforeNavigate: async () => {
        }
    },
    {
        relativePath: '/sign-in',
        canNavigate: () => true,
        beforeNavigate: async () => {
            showComponent('login-component')
            // logIn()
        },
    },
    {
        relativePath: '/sign-up',
        canNavigate: () => true,
        beforeNavigate: async () => {
            // showComponent('signout-component')
            showComponent('signup-component')
        },
    },
    {
        relativePath: '/sign-out',
        canNavigate: () => true,
        beforeNavigate: async () => {
            alert('cock')
            // showComponent('signout-component')
        },
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
            // showComponent('user-profile-component')
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
            showComponent('settings-component')
            // document.querySelector('settings-component').setAttribute('visible', '')
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

export const route404 = {
    relativePath: '/404',
    canNavigate: () => true,
}

staticRoutes.push(route404)

