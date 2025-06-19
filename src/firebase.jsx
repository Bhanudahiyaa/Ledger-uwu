import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAsG5vOYPrpmnti9Dit8zZAKJjfZj32pMs",
  authDomain: "finance-tracker-9ac84.firebaseapp.com",
  projectId: "finance-tracker-9ac84",
  storageBucket: "finance-tracker-9ac84.firebasestorage.app",
  messagingSenderId: "916204210828",
  appId: "1:916204210828:web:402803201a65fbbecc09a9",
  measurementId: "G-CE207SXZVL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };
