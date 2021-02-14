import {Route, Switch, useRouteMatch} from 'react-router-dom';
import {useState}                     from 'react';

import {GameContext} from 'context/gameContext';

import StartPage  from './routes/Start';
import BoardPage  from './routes/Board';
import FinishPage from './routes/Finish';


const GamePage = () => {
    const [myCards, setMyCards] = useState([]);
    const [opponentCards, setOpponentCards] = useState([]);

    const gameContextValue = {
        myCards:       myCards,
        opponentCards: opponentCards,

        setMyCards,
        setOpponentCards,
    }

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
