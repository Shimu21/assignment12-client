// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available- 
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCNnqVC-2iiBQmy_dbckgKsaBRX9YgmzJU",
    authDomain: "final-project-12-80ce8.firebaseapp.com",
    projectId: "final-project-12-80ce8",
    storageBucket: "final-project-12-80ce8.appspot.com",
    messagingSenderId: "736118659406",
    appId: "1:736118659406:web:2708543ed986058863a61f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
