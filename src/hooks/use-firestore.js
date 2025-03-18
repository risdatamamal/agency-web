import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import firestoreInitialization from "../firebase/firestore.init";
import { collection, getDocs } from "firebase/firestore";
import { add_user, sign_out, user_info } from "../redux/features/auth-slice";
import { useRouter } from "next/router";

// initialize firestore
firestoreInitialization();

// declare auth
const auth = getAuth();

const useFirebase = () => {
  // router
  const router = useRouter();
  // dispatch
  const dispatch = useDispatch();

  const getSocials = async () => {
    const socials = await getDocs(collection(db, "socials"));
    const socialsData = socials.docs.map(doc => doc.data());
    return socialsData;
  };
  
  return {
    getSocials,
  };
};

export default useFirebase;
