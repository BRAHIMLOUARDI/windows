import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {

  apiKey: "AIzaSyCDDwcZ5iq7L_AM_YBs8jviJR5zrmSQn6U",
  authDomain: "query-6acd8.firebaseapp.com",
  projectId: "query-6acd8",
  storageBucket: "query-6acd8.appspot.com",
  messagingSenderId: "182650265448",
  appId: "1:182650265448:web:8da7b8bd9bc8a916f6c0dd"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app






 // const firebaseConfig = {
//   apiKey: process.env.REACT_APP_APIKEY,
//   authDomain: process.env.REACT_APP_AUTHDOMAIN,
//   projectId: process.env.REACT_APP_PROJECTID,
//   storageBucket: process.env.REACT_APP_STORAGEBUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
//   appId: process.env.REACT_APP_APPID
// };


// apiKey: "AIzaSyCDDwcZ5iq7L_AM_YBs8jviJR5zrmSQn6U",
// authDomain: "query-6acd8.firebaseapp.com",
// projectId: "query-6acd8",
// storageBucket: "query-6acd8.appspot.com",
// messagingSenderId: "182650265448",
// appId: "1:182650265448:web:8da7b8bd9bc8a916f6c0dd"