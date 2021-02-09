import {useState, useEffect} from 'react';

import PrimaryButton from 'components/PrimaryButton';
import PokemonCard   from 'components/PokemonCard';

import s from './style.module.css';

import database from 'services/firebase';


const StartPage = () => {
    const [pokemons, setPokemons] = useState({});

    const handleClickPokemon = (objId) => () => {
        const p = {...pokemons[objId]};
        p.active = !p.active;
        database.ref('pokemons/' + objId).set(p).then(() => {
            setPokemons(prevState => {
                prevState = {...prevState};
                prevState[objId] = p;
                return prevState;
            });
        });
    }

    const addNewRandomPokemon = () => {
        const entries = Object.entries(pokemons);
        const [_, {...randomPokemon}] = entries[Math.floor(Math.random() * entries.length)];

        database.ref('pokemons').push(randomPokemon).then(({key}) => {
           setPokemons(prevState => ({...prevState, [key]: randomPokemon}));
        });
    }

    useEffect(() => {
        database.ref('pokemons').once('value', (snapshot) => {
            setPokemons(snapshot.val());
        });
    }, [])

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
                        Object.entries(pokemons).map(([objId, p]) => <PokemonCard
                            key={objId}
                            isActive={p.active}
                            data={p}
                            onClick={handleClickPokemon(objId)}
                            className={s.card}
                        />)
                    }
                </div>
            </div>
        </>
    );
};

export default StartPage;
