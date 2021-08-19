import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAHvLtGOlL9B0JQvfE2wyWmoa4Su-a_tkk",
    authDomain: "contact-form-vue-9ac53.firebaseapp.com",
    projectId: "contact-form-vue-9ac53",
    storageBucket: "contact-form-vue-9ac53.appspot.com",
    messagingSenderId: "585462292149",
    appId: "1:585462292149:web:eadab541580087a88f28fc",
    measurementId: "G-VQPGNENG8Z"
}

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();