import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDsPlnbrzNad6FgXoKgLoHMhb6nXfh_QqE",
  authDomain: "venkat-kart.firebaseapp.com",
  projectId: "venkat-kart",
  storageBucket: "venkat-kart.appspot.com",
  messagingSenderId: "755316542329",
  appId: "1:755316542329:web:ff4d4b5ae5113828f5bda8",
  measurementId: "G-DZRL552YP2",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
