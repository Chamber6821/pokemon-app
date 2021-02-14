import cn         from 'classnames';
import {useState} from 'react';

import PokemonCard from 'components/PokemonCard';

import s from './style.module.css';


const PlayerBoard = ({cards}) => {
    const [selectedCardId, setSelectedCardId] = useState(-1);

    const handleClickCard = (id) => () => {
        if (id === selectedCardId) setSelectedCardId(-1)
        else setSelectedCardId(id);
    }

    return (
        <div className={s.wrapper}>
            {
                cards.map((item) => <PokemonCard
                    key={item.id}
                    className={cn(s.card, {
                        [s.selected]: selectedCardId === item.id
                    })}
                    data={item}
                    minimize={true}
                    onClick={handleClickCard(item.id)}
                />)
            }
        </div>
    );
}

export default PlayerBoard;
