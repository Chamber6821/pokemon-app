import {Route, Switch, useRouteMatch} from 'react-router-dom';
import {useState}                     from 'react';

import {GameContext} from 'context/gameContext';

import StartPage  from './routes/Start';
import BoardPage  from './routes/Board';
import FinishPage from './routes/Finish';


const GamePage = () => {
    const [gameContextValue, setGameContextValue] = useState({
        myCards:    [],
        setMyCards: (cards) => updateProperty('myCards', cards),

        opponentCards: [],
        setOpponentCards: (cards) => updateProperty('opponentCards', cards),

        selectedCard: null,
        setSelectedCard: (card) => updateProperty('selectedCard', card),
    });

    const updateProperty = (key, valueOrCallback) => {
        let value = valueOrCallback;
        if (typeof valueOrCallback === 'function') value = valueOrCallback(gameContextValue[key]);
        setGameContextValue(prevState => ({...prevState, [key]: value}));
    };

    const match = useRouteMatch();
    return (
        <GameContext.Provider value={gameContextValue}>
            <Switch>
                <Route path={match.path + '/'} exact component={StartPage}/>
                <Route path={match.path + '/board'} component={BoardPage}/>
                <Route path={match.path + '/finish'} component={FinishPage}/>
            </Switch>
        </GameContext.Provider>
    );
};

export default GamePage;
