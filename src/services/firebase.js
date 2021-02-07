import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyC-thHB9_UYFDFpSfPkdQ66O6z1DmwnrP8",
    authDomain: "pokemongame-ccf52.firebaseapp.com",
    databaseURL: "https://pokemongame-ccf52-default-rtdb.firebaseio.com",
    projectId: "pokemongame-ccf52",
    storageBucket: "pokemongame-ccf52.appspot.com",
    messagingSenderId: "991240952910",
    appId: "1:991240952910:web:9d6a55237e0f21d562b71f"
};

firebase.initializeApp(firebaseConfig);

export const fire = firebase;
export const database = fire.database();

export default database;
