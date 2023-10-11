
// v9 compat packages are API compatible with v8 code
import Firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: "sasehacksfall2023.firebaseapp.com",
    projectId: "sasehacksfall2023",
    storageBucket: "sasehacksfall2023.appspot.com",
    messagingSenderId: "734229000370",
    appId: "1:734229000370:web:68ae8edb7bb9f6ce8259ab"
};

const firebase = Firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { firebase, db };
