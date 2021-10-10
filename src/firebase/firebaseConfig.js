import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBuJMbMU_Ot5olBCSxyMHV5QY_6C61t9cI",
    authDomain: "preguntas-c5468.firebaseapp.com",
    projectId: "preguntas-c5468",
    storageBucket: "preguntas-c5468.appspot.com",
    messagingSenderId: "499104225279",
    appId: "1:499104225279:web:d63ef056d6765de38b39ca"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export { app, db }