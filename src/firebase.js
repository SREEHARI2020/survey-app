import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB0SXOp1Ng3YJobDj7p0x3MWpzsWNrK8eo",
    authDomain: "survey-app-ccd1a.firebaseapp.com",
    projectId: "survey-app-ccd1a",
    storageBucket: "survey-app-ccd1a.appspot.com",
    messagingSenderId: "201751004391",
    appId: "1:201751004391:web:fcf45b58c88bf490de8e42",
    measurementId: "G-TGC7JZM69E"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;