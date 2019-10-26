import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC41tbzR1RTCkj1IDMLmL2LWOM7Gyh6fjA",
  authDomain: "fir-firestore-44e37.firebaseapp.com",
  databaseURL: "https://fir-firestore-44e37.firebaseio.com",
  projectId: "fir-firestore-44e37",
  storageBucket: "fir-firestore-44e37.appspot.com",
  messagingSenderId: "208586195707",
  appId: "1:208586195707:web:bddb5734220c34b699a65e",
  measurementId: "G-JNYPM5GZWR"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
