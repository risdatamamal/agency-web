import {
  getAuth, createUserWithEmailAndPassword, updateProfile,
  signInWithEmailAndPassword, sendPasswordResetEmail,signOut
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import firebaseInitialization from "../firebase/firebase.init";
import { add_user, sign_out, user_info } from "../redux/features/auth-slice";
import { useRouter } from "next/router";

// initialize firebase app
firebaseInitialization();

// declare auth
const auth = getAuth();

const useFirebase = () => {
  // router
  const router = useRouter();
  // dispatch
  const dispatch = useDispatch()
  // register With Email Password
  const registerWithEmailPassword = (email, password, name) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        updateProfile(auth.currentUser, {
          displayName: name,
        }).catch((error) => {
          const errorMessage = error?.message;
          toast.error(`${errorMessage}`, {
            position: 'top-left'
          })  
        });
        dispatch(add_user({
          name: name,
          email: user.user.email,
          uid: user.user.uid
        }))
        toast.success(`${name} register successfully`, {
          position: 'top-left'
        })
        router.push("/");
      })
      .catch((error) => {
        const errorMessage = error?.message;
        toast.error(`${errorMessage}`, {
          position: 'top-left'
        })
      });
  }


  // login with email and password
  const loginWithEmailPassword = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        const { displayName: name, email, uid } = user.user;
        dispatch(user_info({
          name: name,
          email: email,
          uid: uid
        }))
        toast.success(`${name} login successfully`, {
          position: 'top-left'
        })
        router.push('/')
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(`${errorMessage}`, {
          position: 'top-left'
        })
      });
  }

  // password reset email sent
  const resetPassword = (email) => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success(`Password reset email sent!`, {
          position: 'top-left'
        })
        router.push("/")
      })
      .catch((error) => {
        const errorMessage = error?.message;
        toast.error(`${errorMessage}`, {
          position: 'top-left'
        })
      });
  }

  // logout
  const logout = () => {
    signOut(auth).then(() => {
      dispatch(sign_out())
      toast.success(`Signout successful.`, {
        position: 'top-left'
      })
    }).catch((error) => {
      const errorMessage = error?.message;
      toast.error(`${errorMessage}`, {
        position: 'top-left'
      })
    });
  }

  return {
    registerWithEmailPassword,
    loginWithEmailPassword,
    resetPassword,
    logout,
  }
}

export default useFirebase;