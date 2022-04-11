// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC5DdZm9dYAHhRKPK-rJTl_V_BSvJ0iVn8",
    authDomain: "genius-car-servises.firebaseapp.com",
    projectId: "genius-car-servises",
    storageBucket: "genius-car-servises.appspot.com",
    messagingSenderId: "772783676706",
    appId: "1:772783676706:web:a4f07246b732c9b144997b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth;