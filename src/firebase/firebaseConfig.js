import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'
const firebaseConfig = {
  apiKey: "AIzaSyALMAad67UcYt6lzXd5caTaMs9vVCCROgg",
  authDomain: "rentoffice2022-e097d.firebaseapp.com",
  projectId: "rentoffice2022-e097d",
  storageBucket: "rentoffice2022-e097d.appspot.com",
  messagingSenderId: "21548179592",
  appId: "1:21548179592:web:4a7bccbe3095a134c47f3d",
  measurementId: "G-NXXTB5VN5D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)