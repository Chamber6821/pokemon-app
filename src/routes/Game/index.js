import {Route, Switch, useRouteMatch} from 'react-router-dom';
import {useState}                     from 'react';

import {PokemonsContext} from 'context/pokemonsContext';

import StartPage  from './routes/Start';
import BoardPage  from './routes/Board';
import FinishPage from './routes/Finish';


const GamePage = () => {
    const [selectedPokemons, setSelectedPokemons] = useState({});

    const pokemonsContextValue = {
        selected: selectedPokemons,

        update: (key, pokemon) => setSelectedPokemons(prevState => {
            prevState = {...prevState};
            prevState[key] = pokemon;
            return prevState;
        }),

        remove: (key) => setSelectedPokemons(prevState => {
            prevState = {...prevState};
            delete prevState[key];
            return prevState;
        }),

        clear: () => setSelectedPokemons({})
    }

    const match = useRouteMatch();
    return (
        <PokemonsContext.Provider value={pokemonsContextValue}>
            <Switch>
                <Route path={`${match.path}/`} exact component={StartPage}/>
                <Route path={`${match.path}/board`} component={BoardPage}/>
                <Route path={`${match.path}/finish`} component={FinishPage}/>
            </Switch>
        </PokemonsContext.Provider>
    );
};

export default GamePage;
