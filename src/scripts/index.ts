import './custom-elements'
import {settings} from "./custom-elements/settings-component";
import {contentWrappers} from "./custom-elements";
import {users} from './mock-data'
import {currentUser, login, logout} from "./modules/auth";
import {logIn, signUp, signOut} from "./modules/auth"





// const handleComponentsVisibility = co

const signinButton = document.querySelector('#sign-in-button')
signinButton.addEventListener('click', logIn)
    
const signupForm = document.querySelector('signup-component form')
signupForm.addEventListener('submit', e => {
    e.preventDefault()

    signUp()
})

// const loginForm = document.querySelector('login-component form')
// loginForm.addEventListener('submit', e => {
//     e.preventDefault()

//     // signIn()
//     // logIn()
// })



