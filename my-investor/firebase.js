// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {

    apiKey: "AIzaSyASjeqS8sw-hjhnz20y1mxOUyxzcUqaNio",
    authDomain: "investor-2ee29.firebaseapp.com",
    projectId: "investor-2ee29",
    storageBucket: "investor-2ee29.appspot.com",
    messagingSenderId: "24826470393",
    appId: "1:24826470393:web:dd7b51586d1362f2996728"
};


// Initialize Firebase
let app;
if (firebase.apps.length===0)
    app = firebase.initializeApp(firebaseConfig);
else
    app = firebase.app();

const auth = firebase.auth();