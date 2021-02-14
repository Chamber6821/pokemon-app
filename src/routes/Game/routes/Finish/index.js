import cn           from 'classnames';
import {useContext} from 'react';
import {useHistory} from 'react-router-dom';

import {GameContext} from 'context/gameContext';
import PokemonCard   from 'components/PokemonCard';
import PrimaryButton from 'components/PrimaryButton';

import s from './style.module.css';

const FinishPage = () => {
    const history = useHistory();
    const gameContext = useContext(GameContext);

    if (!gameContext.isGameOver) history.replace('/game');

    return (
        <div className={s.verticalContainer}>
            <div className={cn(s.horizontalContainer, s.item)}>
                {
                    gameContext.myCards.map((item) => <PokemonCard
                        key={item.id}
                        className={cn(s.card, s.item)}
                        data={{...item, possession: false}}
                    />)
                }
            </div>
            <div className={s.item}>
                <PrimaryButton to="/game">
                    End Game
                </PrimaryButton>
            </div>
            <div className={cn(s.horizontalContainer, s.item)}>
                {
                    gameContext.opponentCards.map((item) => <PokemonCard
                        key={item.id}
                        className={cn(s.card, s.item)}
                        data={{...item, possession: false}}
                    />)
                }
            </div>
        </div>
    );
};

export default FinishPage;
