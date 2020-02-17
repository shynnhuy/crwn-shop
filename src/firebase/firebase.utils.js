import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: 'AIzaSyBdZ0n1vOpx-EwU-QQaQka66t8sl7j3S2E',
    authDomain: 'scrwn-shop.firebaseapp.com',
    databaseURL: 'https://scrwn-shop.firebaseio.com',
    projectId: 'scrwn-shop',
    storageBucket: 'scrwn-shop.appspot.com',
    messagingSenderId: '780216285446',
    appId: '1:780216285446:web:faa8dc7c5dc9ed94e2c687',
    measurementId: 'G-W5C4J5LJPD'
};

export const createUserProfileDocument = async (userAuth, otherData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email, uid } = userAuth;
        const createAt = new Date();
        try {
            await userRef.set({
                uid,
                displayName,
                email,
                createAt,
                ...otherData
            });
        } catch (error) {
            console.log('Error create user ', error.message);
        }
    }

    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
