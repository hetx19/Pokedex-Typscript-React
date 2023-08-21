import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDZ66n9x2Fj96q-zciN4XUO_ks-6cmHmeo",
  authDomain: "pokedex-react-b4d1c.firebaseapp.com",
  projectId: "pokedex-react-b4d1c",
  storageBucket: "pokedex-react-b4d1c.appspot.com",
  messagingSenderId: "599433774132",
  appId: "1:599433774132:web:c6567f0a84dc6dce923661",
  measurementId: "G-CYRKMDWB3R",
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const pokemonListRef = collection(firebaseDB, "pokemonList");
