// import firebase from 'firebase/app';

// // TODO: Replace the following with your app's Firebase project configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyBEe_fAHxAnZdpx5hoyv3HNGfhjATbqFU4",
//     authDomain: "strategic-howl-309817.firebaseapp.com",
//     projectId: "strategic-howl-309817",
//     storageBucket: "strategic-howl-309817.appspot.com",
//     messagingSenderId: "797428654114",
//     appId: "1:797428654114:web:56e1fb6132eb432f836a7b"
// };

// firebase.initializeApp(firebaseConfig);



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBEe_fAHxAnZdpx5hoyv3HNGfhjATbqFU4",
    authDomain: "strategic-howl-309817.firebaseapp.com",
    projectId: "strategic-howl-309817",
    storageBucket: "strategic-howl-309817.appspot.com",
    messagingSenderId: "797428654114",
    appId: "1:797428654114:web:56e1fb6132eb432f836a7b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const storeage = getStorage(app)

export { auth, storeage, app };
