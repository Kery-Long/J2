import {initializeApp} from 'firebase/app'
import {getFirestore } from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCa8gN15b4PaV6cwo_SpXVyzNsyiilyILM",
  authDomain: "book-list-8c209.firebaseapp.com",
  projectId: "book-list-8c209",
  storageBucket: "book-list-8c209.appspot.com",
  messagingSenderId: "700401826272",
  appId: "1:700401826272:web:0bff7be2f8bed11cd91385",
  measurementId: "G-FEPK91VQJD"

  
};
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  

  initializeApp(firebaseConfig)

  const db = getFirestore()

  const auth = getAuth()

  export { db, auth}