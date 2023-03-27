import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getMessaging } from "firebase/messaging";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyAolo29YZYHAky214S51y9J298ft50QMnM",
    authDomain: "to-do-app-a47f5.firebaseapp.com",
    projectId: "to-do-app-a47f5",
    storageBucket: "to-do-app-a47f5.appspot.com",
    messagingSenderId: "349551352050",
    appId: "1:349551352050:web:2fa2ca89b44845a400986b"
};
const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);
export const db = getFirestore()
export const auth = getAuth()
export const storage = getStorage();











