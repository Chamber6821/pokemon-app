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

class Firebase {
    constructor() {
        firebase.initializeApp(firebaseConfig);

        this.fire = firebase;
        this.db = this.fire.database();
    }

    getPokemonsOnce = async () => {
        return await this.db.ref('pokemons').once('value').then(snap => snap.val());
    }

    addPokemon = async (pokemon) => {
        return this.db.ref('pokemons').push(pokemon);
    }
}

export default Firebase;
