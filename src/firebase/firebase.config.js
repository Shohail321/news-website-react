// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuNfxGx3MdxYZ60PUc6jPIaJXiNX5yMwM",
  authDomain: "dragon-news-react-5eeef.firebaseapp.com",
  projectId: "dragon-news-react-5eeef",
  storageBucket: "dragon-news-react-5eeef.firebasestorage.app",
  messagingSenderId: "310729998060",
  appId: "1:310729998060:web:50f3e24fbe5361186dafc9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;