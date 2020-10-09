import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDpVLKR9emVsKjIS4wyu1bya90pxA-aM8Q",
  authDomain: "tinder-clone-b5e2d.firebaseapp.com",
  databaseURL: "https://tinder-clone-b5e2d.firebaseio.com",
  projectId: "tinder-clone-b5e2d",
  storageBucket: "tinder-clone-b5e2d.appspot.com",
  messagingSenderId: "1062598814695",
  appId: "1:1062598814695:web:592ac38b80461ed610ab42",
  measurementId: "G-R5GSGC0227"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
firebaseApp.firestore().settings({ experimentalForceLongPolling: true });
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
