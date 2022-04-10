// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1gn0T871DnG-GscCdSznwUc7-vuPITHM",
  authDomain: "colour24-app.firebaseapp.com",
  projectId: "colour24-app",
  storageBucket: "colour24-app.appspot.com",
  messagingSenderId: "905117007864",
  appId: "1:905117007864:web:c097c830b85f23260aa00d"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
const firebaseApp =initializeApp(firebaseConfig)

export const auth = getAuth(firebaseApp)
export default firebaseApp;




// const firebaseApp = initializeApp(firebaseConfig);

// export const auth = getAuth(firebaseApp);

// export default firebaseApp;