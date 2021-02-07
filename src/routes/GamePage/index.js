import {useState, useEffect} from 'react';

import PrimaryButton from 'components/PrimaryButton';
import PokemonCard   from 'components/PokemonCard';

import s from './style.module.css';

import database from '../../services/firebase';


const GamePage = () => {
    const [pokemons, setPokemons] = useState([]);

    const handleClickPokemon = (objId) => () => {
        setPokemons(pokemons.map((p) => {
            p = {...p};
            if (p.objId === objId) {
                p.active = !p.active;
                database.ref('pokemons/' + p.objId).set(p);
            }
            return p;
        }));
    }

    const loadPokemonsFromFirebase = () => {
        database.ref('pokemons').once('value', (snapshot) => {
            setPokemons(Object.entries(snapshot.val()).map(([objId, p]) => ({
                objId: objId,
                active: false,
                ...p
            })));
        });
    }

    const addNewRandomPokemon = () => {
        const {objId, ...randomPokemon} = pokemons[Math.floor(Math.random() * pokemons.length)];
        const key = database.ref('pokemons').push(randomPokemon).key;
        console.log(`Create new pokemon, key: ${key}`);

        loadPokemonsFromFirebase();
    }

    useEffect(loadPokemonsFromFirebase, [])

    return (
        <>
            <div>
                <div className={s.flex}>
                    <PrimaryButton onClick={addNewRandomPokemon}>
                        Add new pokemon
                    </PrimaryButton>
                </div>
                <div className={s.flex}>
                    {
                        pokemons.map((p) => <PokemonCard
                            key={p.objId}
                            isActive={p.active}
                            data={p}
                            onClick={handleClickPokemon(p.objId)}
                        />)
                    }
                </div>
            </div>
        </>
    );
};

export default GamePage;
