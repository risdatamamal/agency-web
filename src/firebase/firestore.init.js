import firebaseInitialization from "./firebase.init";
import { getFirestore } from "firebase/firestore";

function firestoreInitialization() {
  const app = firebaseInitialization(); // Dapatkan instance Firebase App
  return getFirestore(app); // Dapatkan instance Firestore
}

export default firestoreInitialization;
