
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 
import { getStorage } from "firebase/storage"; 
import { getFirestore } from "firebase/firestore";  

const firebaseConfig = {
  apiKey: "AIzaSyBMUhJ4q1wiRpGDPMbCZOGnT7NrZY95Nss",
  authDomain: "chat-application-af297.firebaseapp.com",
  projectId: "chat-application-af297",
  storageBucket: "chat-application-af297.firebasestorage.app",
  messagingSenderId: "345400668878",
  appId: "1:345400668878:web:2ba921a4b7e3bd3522569f",
  measurementId: "G-WHT8M3ZQHG"
};
const app = initializeApp(firebaseConfig);

export const auth =  getAuth(app); 
export const storage = getStorage(app); 
export const db = getFirestore(app); 
