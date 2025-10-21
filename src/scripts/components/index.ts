import {contentWrappers} from './custom-elements'
// import {contentWrappers} from '@custom-elements'

// export const components = {
export const htmlNodes = {
	...contentWrappers,


     signinButton: document.querySelector('#sign-in-button'),
     signupForm: document.querySelector('signup-component form'),
     mobileMenu: document.querySelector('#mobile-menu'),
}


components.signinButton.addEventListener('click', logIn)
    
components.signupForm.addEventListener('submit', e => {
    e.preventDefault()

    signUp()
})

// const loginForm = document.querySelector('login-component form')
// loginForm.addEventListener('submit', e => {
//     e.preventDefault()

//     // signIn()
//     // logIn()
// })

