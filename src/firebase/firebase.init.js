import { initializeApp, getApps, getApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

function firebaseInitialization() {
  return !getApps().length ? initializeApp(firebaseConfig) : getApp();
}

export default firebaseInitialization;
