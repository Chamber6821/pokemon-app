import cn           from 'classnames';
import {useContext} from 'react';

import {GameContext} from 'context/gameContext';

import PokemonCard from 'components/PokemonCard';

import s from './style.module.css';


const PlayerBoard = ({cards}) => {
    const gameContext = useContext(GameContext);
    const selectedCard = gameContext.selectedCard;

    const handleClickCard = (card) => () => {
        if (selectedCard === card) gameContext.setSelectedCard(null);
        else gameContext.setSelectedCard(card);
    }

    return (
        <div className={s.wrapper}>
            {
                cards.map((item) => <PokemonCard
                    key={item.id}
                    className={cn(s.card, {
                        [s.selected]: selectedCard === item
                    })}
                    data={{...item, possession: null}}
                    minimize={true}
                    onClick={handleClickCard(item)}
                />)
            }
        </div>
    );
}

export default PlayerBoard;
