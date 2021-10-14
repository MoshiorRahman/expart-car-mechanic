
import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.cofig";


const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default initializeAuthentication;