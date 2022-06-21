import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCpT3BSxon2svhweIQEezGnyYO3aru2QBo",
    authDomain: "clone-2e61d.firebaseapp.com",
    projectId: "clone-2e61d",
    storageBucket: "clone-2e61d.appspot.com",
    messagingSenderId: "457338542796",
    appId: "1:457338542796:web:a1e5edd1c70113fc380069",
    measurementId: "G-T0DYM3DW8W"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };