import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyBfuxY72oaxwBcjgEc4PAyJQ6DJZxfJOd4",
  authDomain: "flixer-b3f27.firebaseapp.com",
  databaseURL: "https://flixer-b3f27.firebaseio.com",
  projectId: "flixer-b3f27",
  storageBucket: "flixer-b3f27.appspot.com",
  messagingSenderId: "551759487544",
  appId: "1:551759487544:web:dd50d8f50a5d3bb525fccd",
};

const firebase = Firebase.initializeApp(config);

export { firebase };
