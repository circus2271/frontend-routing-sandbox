import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, getRedirectResult, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import { getFirestore, collection, addDoc, query, where, orderBy, onSnapshot } from "firebase/firestore";

import { triggerNavigation } from '../index'        
        export const provider = new GoogleAuthProvider();
        
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDx5jr9IkYKRPnG_WDKL-5kqCeXhSkuukc",
  authDomain: "frontend-routing.firebaseapp.com",
  projectId: "frontend-routing",
  storageBucket: "frontend-routing.firebasestorage.app",
  messagingSenderId: "285231819247",
  appId: "1:285231819247:web:bd437f71ff67322ab2ae1a",
  measurementId: "G-SZVTJGJ5Q5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
        

        
console.log("✅ Firebase готов к работе!");


// async function signIn() {
export async function logIn() {
	try {
        signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    const photoSrc = user.photoURL
debugger
    document.querySelector('.avatar.round').innerHTML = `<img src="${photoSrc}">`
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    console.error(error)
    // Handle Errors here.
    // const errorCode = error.code;
    // const errorMessage = error.message;
    // // The email of the user's account used.
    // const email = error.customData.email;
    // // The AuthCredential type that was used.
    // const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
    	// signInWithRedirect(auth, new GoogleAuthProvider())

	} catch(error) {
		console.error(error)
		// triggerNavigation('/about')
	}

}
// getRedirectResult(auth)
//   .then((result) => {
//     debugger


//     // This gives you a Google Access Token. You can use it to access Google APIs.
//     const credential = GoogleAuthProvider.credentialFromResult(result);
//     const token = credential.accessToken;

//     // The signed-in user info.
//     const user = result.user;
//     // IdP data available using getAdditionalUserInfo(result)
//     // ...
//     console.log(user)
//   }).catch((error) => {
//   	console.error(error)
//   	// debugger
//     // Handle Errors here.
//     // const errorCode = error.code;
//     // const errorMessage = error.message;
//     // // The email of the user's account used.
//     // const email = error.customData.email;
//     // // The AuthCredential type that was used.
//     // const credential = GoogleAuthProvider.credentialFromError(error);
//     // ...
//   });	

//         export async function signOut() {
//             try {
//                 await signOut(fbauth);
//             } catch (error) {
//                 console.error('Ошибка выхода:', error);
//             }
//         }

//         export async function signUp() {
//             const email = document.querySelector('signup-component .email-input').value;
//             const password = document.querySelector('signup-component .password-input').value;
//             try {
//                 await createUserWithEmailAndPassword(fbauth, email, password);
//                 alert(' Аккаунт создан! Теперь вы можете войти.');
//             } catch (error) {
//                 alert('❌ Ошибка: ' + error.message);
//             }
//         }

export async function signUp() {}
