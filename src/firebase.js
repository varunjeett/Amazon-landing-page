import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAlabDIM96y6xi24BGi0Kt6jCcm-hFBj9Y",
    authDomain: "bestofferspage.firebaseapp.com",
    databaseURL: "https://bestofferspage.firebaseio.com",
    projectId: "bestofferspage",
    storageBucket: "bestofferspage.appspot.com",
    messagingSenderId: "766765301586",
    appId: "1:766765301586:web:daca173abf1d5a690bc48b",
    measurementId: "G-12Z8LJ192S"
  };


// eslint-disable-next-line
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export {db}
export default firebase;