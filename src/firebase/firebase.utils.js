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

// firebase의 계정 정보를 가져와 기본 설정을 해 준다.
firebase.initializeApp(config);

// 계정 생성 시에 firebase가 가지고 있는 User의 기본 정보로 부터 필요한 부분만 추출
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  // const collectionRef = firestore.collection('users');
  // const collectionSnapshot = await collectionRef.get();
  // console.log({ collection: collectionSnapshot.docs.map(doc => doc.data()) });

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

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
}

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  })

  return transformedCollection.reduce( (accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};


export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject)
  });
};

// Login시에 firebase를 통한 인증에서 사용
export const auth = firebase.auth();
// DB로 firestore를 이용
export const firestore = firebase.firestore();

// Google 계정을 통해 Login을 할 때 사용되는 UI를 설정
export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
