import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCZEZnHOoYeHZNHyrPOv1u8uHQwTARmpD0",
  authDomain: "medhub-connect-2a5ac.firebaseapp.com",
  projectId: "medhub-connect-2a5ac",
  storageBucket: "medhub-connect-2a5ac.appspot.com",
  messagingSenderId: "42885826475",
  appId: "1:42885826475:web:8c1842e66dc626f897f4ee"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);