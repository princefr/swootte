import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/analytics";
import 'firebase/storage';




const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_firebase_apiKey,
    authDomain: process.env.NEXT_PUBLIC_firebase_authDomain,
    databaseURL: process.env.NEXT_PUBLIC_firebase_databaseURL,
    projectId: process.env.NEXT_PUBLIC_firebase_projectId,
    storageBucket: process.env.NEXT_PUBLIC_firebase_storageBucket,
    messagingSenderId: process.env.NEXT_PUBLIC_firebase_messagingSenderId,
    appId: process.env.NEXT_PUBLIC_firebase_appId,
    measurementId: process.env.NEXT_PUBLIC_firebase_measurementId
  };



  export default function FirebaseClient(){
      if(!firebase.apps.length){
        firebase.initializeApp(firebaseConfig);
      }
  }


 