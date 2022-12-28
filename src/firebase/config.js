import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBezvv2X1V7n5VCXFWlaprQHo1Nsk5TYOk",
  authDomain: "ninja-dojo-39d75.firebaseapp.com",
  projectId: "ninja-dojo-39d75",
  storageBucket: "ninja-dojo-39d75.appspot.com",
  messagingSenderId: "277306100715",
  appId: "1:277306100715:web:4cfb3f6db59318b4dea7ae",
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

const timestamp = firebase.firestore.Timestamp;

export { projectAuth, projectFirestore, timestamp };
