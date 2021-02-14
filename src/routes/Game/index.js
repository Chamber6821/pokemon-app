import {Route, Switch, useRouteMatch} from 'react-router-dom';
import {useState}                     from 'react';

import {GameContext} from 'context/gameContext';

import StartPage  from './routes/Start';
import BoardPage  from './routes/Board';
import FinishPage from './routes/Finish';


const GamePage = () => {
    const [myCards, setMyCards] = useState([]);
    const [myDeck, setMyDeck] = useState(myCards);
    const [opponentCards, setOpponentCards] = useState([]);
    const [opponentDeck, setOpponentDeck] = useState(opponentCards);
    const [selectedCard, setSelectedCard] = useState(null);
    const [isGameOver, setGameOver] = useState(false);
    const [score, setScore] = useState({my: 0, opponent: 0});

    const clear = () => {
        setMyCards([]); setOpponentCards([]);
        setMyDeck([]); setOpponentDeck([]);
        setSelectedCard(null);
        setGameOver(false);
        setScore({my: 0, opponent: 0});
    }

    const contextValue = {
        myCards, setMyCards,
        myDeck, setMyDeck,
        opponentCards, setOpponentCards,
        opponentDeck, setOpponentDeck,
        selectedCard, setSelectedCard,
        isGameOver, setGameOver,
        score, setScore,

        clear
    }

    const match = useRouteMatch();

    return (
        <GameContext.Provider value={contextValue}>
            <Switch>
                <Route path={match.path + '/'} exact component={StartPage}/>
                <Route path={match.path + '/board'} component={BoardPage}/>
                <Route path={match.path + '/finish'} component={FinishPage}/>
            </Switch>
        </GameContext.Provider>
    );
};

export default GamePage;
