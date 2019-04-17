import firebase from 'firebase'
import 'firebase/firestore'

var config = {
  apiKey: "AIzaSyBh8i1w6CiQ5SFVQJ2qkI3uzHQKuKnSB88",
  authDomain: "sojade-1e016.firebaseapp.com",
  databaseURL: "https://sojade-1e016.firebaseio.com",
  projectId: "sojade-1e016",
  storageBucket: "sojade-1e016.appspot.com",
  messagingSenderId: "571711018067"
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