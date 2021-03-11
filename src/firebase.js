import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDDLaXJcLFlvGBXXdHVt56vExGSEygt5x8",
    authDomain: "linkedin-clone-601ea.firebaseapp.com",
    projectId: "linkedin-clone-601ea",
    storageBucket: "linkedin-clone-601ea.appspot.com",
    messagingSenderId: "871313889910",
    appId: "1:871313889910:web:c88e02817cd06153235d57"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
