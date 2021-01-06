  import  firebase from 'firebase/app';
  import 'firebase/storage';
  import 'firebase/firestore';
  
  
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyD6KQGaROn_5hVlqvHr07rO1SrzhYmt1iM",
    authDomain: "firegram-5c714.firebaseapp.com",
    projectId: "firegram-5c714",
    storageBucket: "firegram-5c714.appspot.com",
    messagingSenderId: "1063491192756",
    appId: "1:1063491192756:web:a2539d770726e885ffd4e1"
  };

  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };