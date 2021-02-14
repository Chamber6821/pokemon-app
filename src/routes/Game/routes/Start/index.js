import {useState, useEffect, useContext} from 'react';

import {GameContext}     from 'context/gameContext';
import {FirebaseContext} from 'context/firebaseContext';

import PrimaryButton from 'components/PrimaryButton';
import PokemonCard   from 'components/PokemonCard';

import s from './style.module.css';


const StartPage = () => {
    const [pokemons, setPokemons] = useState({});
    const gameContext = useContext(GameContext);
    const firebase = useContext(FirebaseContext)

    const handleClickPokemon = (key, card) => () => {
        setPokemons(prevState => {
            prevState = {...prevState};
            prevState[key] = {...card, selected: !card.selected};
            return prevState;
        });
    };

    const handleClickStartGame = () => {
        const selectedCards = Object.values(pokemons).filter((item) => item.selected);
        gameContext.setMyCards(selectedCards);
    }

    useEffect(() => {
        (async () => {
            setPokemons(await firebase.getPokemonsOnce());
        })().then();
    }, []);

    return (
        <div>
            <div className={s.flex}>
                <PrimaryButton onClick={handleClickStartGame} to="/game/board">
                    Start Game
                </PrimaryButton>
            </div>
            <div className={s.flex}>
                {
                    Object.entries(pokemons).map(([key, card]) => <PokemonCard
                        key={key}
                        isSelected={card.selected}
                        data={card}
                        onClick={handleClickPokemon(key, card)}
                        className={s.card}
                    />)
                }
            </div>
        </div>
    );
};

export default StartPage;
