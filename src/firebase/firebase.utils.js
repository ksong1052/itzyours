import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyAnQZzya4n_GVNacwR8Bv7WcKk9-VJp33k",
  authDomain: "itzyours-6a520.firebaseapp.com",
  projectId: "itzyours-6a520",
  storageBucket: "itzyours-6a520.appspot.com",
  messagingSenderId: "348438724183",
  appId: "1:348438724183:web:554932b93f7892da9ced12",
  measurementId: "G-0R4QR4YNZ5"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;