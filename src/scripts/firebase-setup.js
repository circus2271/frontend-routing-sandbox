
// Импортируем нужные модули Firebase
        import { initializeApp } from "firebase/app";
        import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
        import { getFirestore, collection, addDoc, query, where, orderBy, onSnapshot } from "firebase/firestore";
        
        
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

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

// Инициализация Firebase
        const app = initializeApp(firebaseConfig);
        const auth = getAuth(app);
       const db = getFirestore(app);
        
        // Делаем глобальными для использования в функциях
        window.fbauth = auth;
       // window.fbdb = db;
        window.fbauthFunctions = {
            createUserWithEmailAndPassword,
            signInWithEmailAndPassword, 
            signOut,
            onAuthStateChanged
        };
        window.fbfirestoreFunctions = {
            collection,
            addDoc,
            query,
            where,
            orderBy,
            onSnapshot
        };
        
        console.log("✅ Firebase готов к работе!");

