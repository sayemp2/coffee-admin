import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD7v8h55p3c94MOJfWahPFyk6vepf3YHZE",
    authDomain: "coffee-server-a8c8e.firebaseapp.com",
    projectId: "coffee-server-a8c8e",
    storageBucket: "coffee-server-a8c8e.appspot.com",
    messagingSenderId: "733153937960",
    appId: "1:733153937960:web:7e01face03f01db9a6431d",
    measurementId: "G-BN39V5TT7V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default app;