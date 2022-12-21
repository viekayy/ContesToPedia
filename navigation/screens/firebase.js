import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import firebase from 'firebase';

const firebaseConfig = {
  // apiKey: "AIzaSyAPyVBAi8FsPjrkkln-Uu0C3RxQj0dVTn4",
  // authDomain: "contestopedia-91d41.firebaseapp.com",
  // projectId: "contestopedia-91d41",
  // storageBucket: "contestopedia-91d41.appspot.com",
  // messagingSenderId: "98195655937",
  // appId: "1:98195655937:web:a07ea425acc4f2e6fe9f00",
  // measurementId: "G-HXGQ2L63ZL"
  };

// For Firebase JS SDK v7.20.0 and later, measurementId is optiona

let app;
if(firebase.apps.length === 0){
   app = firebase.initializeApp(firebaseConfig)
}else{
    app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export {db,auth};

// firebase.initializeApp(firebaseConfig);
// var db = firebase.firestore();
  
// export default db;