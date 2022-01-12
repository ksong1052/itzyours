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

// Register User
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get(userRef);

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch(error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
