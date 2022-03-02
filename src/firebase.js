import { initializeApp } from 'firebase/app'
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBbvJYJIlX9amLfk-RRMf9VpMh7hYkzdnQ",
  authDomain: "bloomcu-auth-service.firebaseapp.com",
  projectId: "bloomcu-auth-service",
  storageBucket: "bloomcu-auth-service.appspot.com",
  messagingSenderId: "50575323133",
  appId: "1:50575323133:web:33198098b89678eb847394"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export { auth }
