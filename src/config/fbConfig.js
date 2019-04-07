import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCNhivVe4x1wuCdNfmIX7iuikxtl0IeOOM',
  authDomain: 'my-project-623f9.firebaseapp.com',
  databaseURL: 'https://my-project-623f9.firebaseio.com',
  projectId: 'my-project-623f9',
  storageBucket: 'my-project-623f9.appspot.com',
  messagingSenderId: '291726104474',
};

firebase.initializeApp(config);

export default firebase;
