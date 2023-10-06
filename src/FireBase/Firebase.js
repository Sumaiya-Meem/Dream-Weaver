// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWYq-PERMtI1bMVJWvK2QsuxBr_qrle6Q",
  authDomain: "react-weddings-events-project.firebaseapp.com",
  projectId: "react-weddings-events-project",
  storageBucket: "react-weddings-events-project.appspot.com",
  messagingSenderId: "84747110759",
  appId: "1:84747110759:web:b261f92c78ccc1cd3747c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app