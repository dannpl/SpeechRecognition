import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/database'

var config = {
  apiKey: "AIzaSyB5igWxV-E0OINofSmSTBSRDqf3oy5t7RQ",
  authDomain: "hackaton-petro.firebaseapp.com",
  databaseURL: "https://hackaton-petro.firebaseio.com",
  projectId: "hackaton-petro",
  storageBucket: "",
  messagingSenderId: "502266798379",
  appId: "1:502266798379:web:038c0c55369cc9f6"
}

!firebase.apps.length ? firebase.initializeApp(config) : ''
export const GoogleProvider = new firebase.auth.GoogleAuthProvider()
export const auth = firebase.auth()
export const DB = firebase.database()
export const StoreDB = firebase.firestore()
export default firebase