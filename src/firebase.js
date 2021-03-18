import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCUF9fhYWQeWTEG_ft-Eepyu71WuFdpzvg",
  authDomain: "clone-ed8f6.firebaseapp.com",
  projectId: "clone-ed8f6",
  storageBucket: "clone-ed8f6.appspot.com",
  messagingSenderId: "477909949391",
  appId: "1:477909949391:web:b52b25276d00f9444b50ba"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, provider }