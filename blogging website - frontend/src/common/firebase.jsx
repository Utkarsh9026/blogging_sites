import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAFx5UgmF6FvTzn7ulrR1NOiljL3a80Uzo",
  authDomain: "reactjs-blog-app-21291.firebaseapp.com",
  projectId: "reactjs-blog-app-21291",
  storageBucket: "reactjs-blog-app-21291.appspot.com",
  messagingSenderId: "640004631347",
  appId: "1:640004631347:web:359107fa840984d95cac46",
};

const app = initializeApp(firebaseConfig);

// google auth
const provider = new GoogleAuthProvider();

const auth = getAuth();

export const authWithGoogle = async () => {
  let user = null;

  await signInWithPopup(auth, provider)
    .then((result) => {
      user = result.user;
    })
    .catch((err) => {
      console.log(err);
    });

  return user;
};
