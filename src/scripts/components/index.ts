import {contentWrappers} from './custom-elements'
// import {contentWrappers} from '@custom-elements'
// export const components = {
import {logIn, signUp} from '@modules/auth'

export const htmlNodes = {
	...contentWrappers,


     signinButton: document.querySelector('#sign-in-button'),
     signupForm: document.querySelector('signup-component form'),
     mobileMenu: document.querySelector('#mobile-menu'),
}


htmlNodes.signinButton.addEventListener('click', logIn)
    
htmlNodes.signupForm.addEventListener('submit', e => {
    e.preventDefault()

    signUp()
})

// const loginForm = document.querySelector('login-component form')
// loginForm.addEventListener('submit', e => {
//     e.preventDefault()

//     // signIn()
//     // logIn()
// })

