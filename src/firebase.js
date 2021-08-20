import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyBvyWT-o_GnvE4aK4p18Hz9z2QspZaBYAI",
    authDomain: "netflix-clone-3047d.firebaseapp.com",
    projectId: "netflix-clone-3047d",
    storageBucket: "netflix-clone-3047d.appspot.com",
    messagingSenderId: "595340739259",
    appId: "1:595340739259:web:768741b0b7f27f90d9df9e"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  export {auth}
  export default db;