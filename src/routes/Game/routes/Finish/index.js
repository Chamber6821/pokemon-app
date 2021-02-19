import cn                     from 'classnames';
import {useContext, useState} from 'react';
import {useHistory}           from 'react-router-dom';

import {GameContext}     from 'context/gameContext';
import {FirebaseContext} from 'context/firebaseContext';
import PokemonCard       from 'components/PokemonCard';
import PrimaryButton     from 'components/PrimaryButton';

import s from './style.module.css';

const FinishPage = () => {
    const [selectedCard, setSelectedCard] = useState(null);
    const gameContext = useContext(GameContext);
    const firebase = useContext(FirebaseContext);
    const history = useHistory();

    if (!gameContext.isGameOver) history.replace('/game');

    const handleClickCard = (card) => () => {
        if (selectedCard === card) setSelectedCard(null);
        else setSelectedCard(card);
    }

    const handleClickEndGame = () => {
        if (selectedCard) firebase.addPokemon(selectedCard).then();
    }

    return (
        <div className={s.verticalContainer}>
            <div className={cn(s.horizontalContainer, s.item)}>
                {
                    gameContext.myCards.map((item) => (
                        <div className={s.item}>
                            <PokemonCard
                                key={item.id}
                                className={cn(s.card)}
                                data={{...item, possession: null}}
                            />
                        </div>
                    ))
                }
            </div>
            <div className={s.item}>
                <PrimaryButton onClick={handleClickEndGame} to="/game">
                    End Game
                </PrimaryButton>
            </div>
            <div className={cn(s.horizontalContainer, s.item)}>
                {
                    gameContext.opponentCards.map((item) => (
                        <div className={s.item}>
                            <PokemonCard
                                key={item.id}
                                className={cn(s.card)}
                                data={{...item, possession: false}}
                                isSelected={selectedCard === item}
                                onClick={handleClickCard(item)}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default FinishPage;
