import {useState, useEffect, useContext} from 'react';

import {PokemonsContext} from 'context/pokemonsContext';
import {FirebaseContext} from 'context/firebaseContext';

import PrimaryButton from 'components/PrimaryButton';
import PokemonCard   from 'components/PokemonCard';

import s from './style.module.css';


const StartPage = () => {
    const [pokemons, setPokemons] = useState({});
    const pokemonsContext = useContext(PokemonsContext);
    const firebase = useContext(FirebaseContext)

    const handleClickPokemon = (objId) => () => {
        setPokemons(prevState => Object.entries(prevState).reduce((acc, [key, p]) => {
            if (key === objId) {
                p = {...p, selected: !p.selected};

                if (p.selected) pokemonsContext.update(key, p);
                else pokemonsContext.remove(key);
            }

            acc[key] = p;
            return acc;
        }, {}));
    };

    useEffect(async () => {
        pokemonsContext.clear();
        setPokemons(await firebase.getPokemonsOnce());
    }, []);

    return (
        <>
            <div>
                <div className={s.flex}>
                    <PrimaryButton to="/game/board">
                        Start Game
                    </PrimaryButton>
                </div>
                <div className={s.flex}>
                    {
                        Object.entries(pokemons).map(([objId, p]) => <PokemonCard
                            key={objId}
                            isSelected={p.selected}
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
