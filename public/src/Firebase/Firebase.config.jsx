// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_apiKey,
  authDomain:import.meta.env.VITE_authDomain,
  projectId:import.meta.env.VITE_projectId,
  storageBucket:import.meta.env.VITE_storageBucket,
  messagingSenderId:import.meta.env.VITE_messagingSenderId,
  appId:import.meta.env.VITE_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;













// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDzAzMkFa_nrDRp43E-9OCVVXV20NsYabw",
//   authDomain: "summer-camp-school-154eb.firebaseapp.com",
//   projectId: "summer-camp-school-154eb",
//   storageBucket: "summer-camp-school-154eb.appspot.com",
//   messagingSenderId: "434316263770",
//   appId: "1:434316263770:web:9e3882fc273e085bcff363"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export default app;