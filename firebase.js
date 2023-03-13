import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyDHG9XD3yvbN8bTRGWd8rDt7DI0q4VnDhk",
    authDomain: "next-todo-9f1be.firebaseapp.com",
    projectId: "next-todo-9f1be",
    storageBucket: "next-todo-9f1be.appspot.com",
    messagingSenderId: "133903538894",
    appId: "1:133903538894:web:44ba5c93997eef0fc5ce9f"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);   