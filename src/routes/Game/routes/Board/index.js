import {useContext, useEffect, useState} from 'react';

import {GameContext} from 'context/gameContext';

import PokemonCard from 'components/PokemonCard';
import PlayerBoard from 'components/PlayerBoard';

import s from './style.module.css';


const BoardPage = () => {
    const [board, setBoard] = useState([]);
    const [opponentCards, setOpponentCards] = useState([]);
    const gameContext = useContext(GameContext);

    // const history = useHistory();
    // if (Object.keys(pokemons).length === 0) {
    //     history.replace('/game');
    // }

    const loadBoard = async () => {
        const response = await fetch('https://reactmarathon-api.netlify.app/api/board');
        return (await response.json()).data;
    }

    const loadOpponentCard = async () => {
        const response = await fetch('https://reactmarathon-api.netlify.app/api/create-player');
        return (await response.json()).data;
    }

    useEffect(() => {
        (async () => {
            setBoard(await loadBoard());
            gameContext.setOpponentCards(await loadOpponentCard());
        })().then();
    }, [])

    return (
        <div className={s.root}>
            <div className={s.playerOne}>
                <PlayerBoard cards={gameContext.myCards}/>
            </div>
            <div className={s.board}>
                {
                    board.map(({position, card}) =>
                        <div className={s.boardPlate} key={position}>
                            {card && <PokemonCard
                                data={card}
                                minimize={true}
                            />}
                        </div>
                    )
                }
            </div>
            <div className={s.playerTwo}>
                <PlayerBoard cards={gameContext.opponentCards}/>
            </div>
        </div>
    );
};

export default BoardPage;