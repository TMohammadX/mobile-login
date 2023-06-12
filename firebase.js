import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import {
  GoogleAuthProvider,
  GithubAuthProvider,
  GameCenterAuthProvider,
} from "@firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "your api key",
  authDomain: "your domain",
  projectId: "project id",
  storageBucket: "sorage buket url",
  messagingSenderId: "id",
  appId: "id",
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
