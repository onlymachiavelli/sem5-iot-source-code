// firebase.js
import { initializeApp } from "firebase/app"
import { getDatabase } from "firebase/database"

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNf3-0bKHG2vEr3HfPSTzLzVHYpR-blfo",
  authDomain: "essths-project.firebaseapp.com",
  databaseURL:
    "https://essths-project-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "essths-project",
  storageBucket: "essths-project.appspot.com",
  messagingSenderId: "465411764858",
  appId: "1:465411764858:web:f113512de5b355a02381c3",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Get Realtime Database
const database = getDatabase(app)

export { database }
