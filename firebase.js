import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import {
  GoogleAuthProvider,
  GithubAuthProvider,
  GameCenterAuthProvider,
} from "@firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABZDiXGThUVaqO6j7TG_HG0zNL4R6A2wk",
  authDomain: "mobile-app-863b9.firebaseapp.com",
  projectId: "mobile-app-863b9",
  storageBucket: "mobile-app-863b9.appspot.com",
  messagingSenderId: "1031788846865",
  appId: "1:1031788846865:web:46210fec95f17562c576b0",
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const gameCenterProvider = new GithubAuthProvider();

export { auth, googleProvider, githubProvider, gameCenterProvider };
