import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA3dd2q36YTzvYnPYIRE9Yp4hOBpsQQl44",
  authDomain: "react-blog-rn3-89dac.firebaseapp.com",
  projectId: "react-blog-rn3-89dac",
  storageBucket: "react-blog-rn3-89dac.firebasestorage.app",
  messagingSenderId: "282359586674",
  appId: "1:282359586674:web:6c1892c08dd83c77d3c7eb"
};

const app = initializeApp(firebaseConfig);

export default app;