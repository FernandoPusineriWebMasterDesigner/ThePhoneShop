import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCxBJwBqDyRmTc7Oxs6av1YlsMDn8jpBww",
    authDomain: "thephoneshop-6b6fd.firebaseapp.com",
    projectId: "thephoneshop-6b6fd",
    storageBucket: "thephoneshop-6b6fd.appspot.com",
    messagingSenderId: "142529415236",
    appId: "1:142529415236:web:2dbfb8aafb0704db6d5411"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);