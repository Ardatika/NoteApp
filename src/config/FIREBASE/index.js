import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

firebase.initializeApp({
    apiKey: "AIzaSyCOeJ0pYZpvgkJtjMZ3s_LuIqRpVGr1YXc",
    authDomain: "ardatika-180aa.firebaseapp.com",
    projectId: "ardatika-180aa",
    storageBucket: "ardatika-180aa.appspot.com",
    messagingSenderId: "945891778814",
    appId: "1:945891778814:web:5653e72759ec7ee09d85af"
});

const FIREBASE = firebase;

export default FIREBASE;
