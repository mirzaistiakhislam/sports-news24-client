// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBk7NBAOgMoOaYT6MypwkSLDs0OFbhXMpA",
    authDomain: "sports-news24.firebaseapp.com",
    projectId: "sports-news24",
    storageBucket: "sports-news24.appspot.com",
    messagingSenderId: "143289096265",
    appId: "1:143289096265:web:fd9e94236df9dfe1ff8798"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;