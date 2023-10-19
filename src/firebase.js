import firebase from 'firebase/compat/app'

import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAwTJOcqVK1mC3CfSy79FHFtvovaFzFIxw",
  authDomain: "links-tube.firebaseapp.com",
  projectId: "links-tube",
  storageBucket: "links-tube.appspot.com",
  messagingSenderId: "849266837734",
  appId: "1:849266837734:web:3c4e952d49aa51e04cd327",
};

firebase.initializeApp(firebaseConfig);

export default firebase.auth();
