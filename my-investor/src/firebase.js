// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


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
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db, firebase};