import firebase from 'firebase'
import 'firebase/firestore'

var config = {
  apiKey: "AIzaSyBLHEHDXhBUQYoF59-GudhBEiHraE1Pv_A",
  authDomain: "sojade-prod.firebaseapp.com",
  databaseURL: "https://sojade-prod.firebaseio.com",
  projectId: "sojade-prod",
  storageBucket: "sojade-prod.appspot.com",
  messagingSenderId: "229315789210"
};

firebase.initializeApp(config)

//utils
const db = firebase.firestore()
const auth = firebase.auth()
const currentUser = auth.currentUser

const participantsCollection = db.collection('participants')


export {
  db,
  auth,
  currentUser,
  participantsCollection
}
