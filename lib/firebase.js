// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA95aCjSZ_P0AP9IDAlxlsNudL74g1dJvA",
  authDomain: "adarecollection-site.firebaseapp.com",
  projectId: "adarecollection-site",
  storageBucket: "adarecollection-site.firebasestorage.app",
  messagingSenderId: "794968640570",
  appId: "1:794968640570:web:7dfda918ac66b28570b903"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;