import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/database'

var config = {
    apiKey: "AIzaSyB9uyeUGxM8FgYP--SqnCJ3Oj1RJn7FxEc",
    authDomain: "voicebots-2ef24.firebaseapp.com",
    databaseURL: "https://voicebots-2ef24.firebaseio.com",
    projectId: "voicebots-2ef24",
    storageBucket: "",
    messagingSenderId: "926281832056",
    appId: "1:926281832056:web:86960a1c9cc66902"
  }

  !firebase.apps.length ? firebase.initializeApp(config) : ''
export const GoogleProvider = new firebase.auth.GoogleAuthProvider()
export const auth = firebase.auth()
export const DB = firebase.database()
export const StoreDB = firebase.firestore()
export default firebase
