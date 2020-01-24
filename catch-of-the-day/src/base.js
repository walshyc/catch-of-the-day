import Rebase, {
    createClass
} from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAbK1EzNFzHSjTSutItQagss-Y7DmSDke0",
    authDomain: "catch-of-the-day-37597.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-37597.firebaseio.com",
    projectId: "catch-of-the-day-37597",
    storageBucket: "catch-of-the-day-37597.appspot.com",
    messagingSenderId: "204207079927",
    appId: "1:204207079927:web:0780add885a990dc13eef2",
    measurementId: "G-1VQH9N3KBL"
});

const base = Rebase.createClass(firebaseApp.database());

// this is a named export
export {
    firebaseApp
};

// this is a default export
export default base;