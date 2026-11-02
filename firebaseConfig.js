import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDCuvmyLh6GnyEU4TWpt-SO6R4WkwQCHXY",
  authDomain: "coffee-app-919ba.firebaseapp.com",
  projectId: "coffee-app-919ba",
  storageBucket: "coffee-app-919ba.appspot.com",
  messagingSenderId: "382684638503",
  appId: "1:382684638503:web:56b0827c6052f452b88d02",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;
