import {useContext, useEffect, useState} from 'react';
import {useHistory}                      from 'react-router-dom';

import {GameContext} from 'context/gameContext';

import PokemonCard from 'components/PokemonCard';
import PlayerBoard from 'components/PlayerBoard';

import s from './style.module.css';


const countScore = (board, myDeck, opponentDeck) => {
    console.log(board, myDeck, opponentDeck);
    let myScore = myDeck.length;
    let opponentScore = opponentDeck.length;

    board.forEach(({card}) => {
        if (card.possession === 'blue') myScore++;
        else if (card.possession === 'red') opponentScore++;
        // else *warning/error*
    });

    return {myScore, opponentScore};
}

const BoardPage = () => {
    const [board, setBoard] = useState([]);
    const [steps, setSteps] = useState(0);
    const history = useHistory();
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

    const handleClickPlate = (position) => async () => {
        const selectedCard = gameContext.selectedCard;

        if (selectedCard) {
            const params = {
                position,
                card: selectedCard,
                board
            }

            const response = await fetch('https://reactmarathon-api.netlify.app/api/players-turn', {
                method:  'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body:    JSON.stringify(params),
            });

            const newBoard = (await response.json()).data;
            setBoard(newBoard);

            if (selectedCard.possession === 'blue') {
                gameContext.setMyDeck(prevState => prevState.filter((item) => item !== selectedCard));
            } else if (selectedCard.possession === 'red') {
                gameContext.setOpponentDeck(prevState => prevState.filter((item) => item !== selectedCard));
            } else {
                console.log('Warning: invalid possession:', selectedCard.possession);
            }

            gameContext.setSelectedCard(null);
            setSteps(steps => steps + 1);
        }
    }

    // Load opponent and init decks
    useEffect(() => {
        (async () => {
            const newBoard = await loadBoard();
            const opponentCards = (await loadOpponentCard()).map((item) => ({...item, possession: 'red'}));
            const myCards = Array.from(gameContext.myCards).map((item) => ({...item, possession: 'blue'}));

            setBoard(newBoard);
            gameContext.setMyCards(myCards);
            gameContext.setOpponentCards(opponentCards);

            gameContext.setMyDeck(myCards);
            gameContext.setOpponentDeck(opponentCards);
        })().then();
    }, [])

    // Handle game over
    useEffect(() => {
        if (steps >= 9) {
            const {myScore, opponentScore} = countScore(board, gameContext.myDeck, gameContext.opponentDeck);
            console.log({myScore, opponentScore});
            gameContext.setScore({my: myScore, opponent: opponentScore});
            gameContext.setGameOver(true);
            //alert('pause');
            history.replace('/game/finish');
        }
    }, [steps])

    return (
        <div className={s.root}>
            <div className={s.playerOne}>
                <PlayerBoard cards={gameContext.myDeck}/>
            </div>
            <div className={s.board}>
                {
                    board.map(({position, card}) =>
                        <div
                            key={position}
                            className={s.boardPlate}
                            onClick={handleClickPlate(position)}
                        >
                            {card && <PokemonCard
                                data={card}
                                minimize={true}
                            />}
                        </div>
                    )
                }
            </div>
            <div className={s.playerTwo}>
                <PlayerBoard cards={gameContext.opponentDeck}/>
            </div>
        </div>
    );
};

export default BoardPage;