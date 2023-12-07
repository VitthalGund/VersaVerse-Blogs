// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE!,
  authDomain: "blog-ppp.firebaseapp.com",
  projectId: "blog-ppp",
  storageBucket: "blog-ppp.appspot.com",
  messagingSenderId: "1098709596394",
  appId: "1:1098709596394:web:eda979a34fc7238b613f93",
  measurementId: "G-ZQP7Z5CBH7",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);
