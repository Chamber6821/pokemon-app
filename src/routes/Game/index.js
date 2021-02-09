import {Route, Switch, useRouteMatch} from 'react-router-dom';
import {useState} from 'react';

import {PokemonsContext} from 'context/pokemonsContext';

import StartPage  from './routes/Start';
import BoardPage  from './routes/Board';
import FinishPage from './routes/Finish';


const GamePage = () => {
    const [selectedPokemons, setSelectedPokemons] = useState({});

    const handleUpdate = (key, pokemon) =>
        setSelectedPokemons(prevState => {
            prevState = {...prevState};
            prevState[key] = pokemon;
            return prevState;
        })

    const handleRemove = (key) =>
        setSelectedPokemons(prevState => {
            prevState = {...prevState};
            delete prevState[key];
            return prevState;
        })

    const match = useRouteMatch();
    return (
        <PokemonsContext.Provider value={{
            selected: selectedPokemons,
            update: handleUpdate,
            remove: handleRemove
        }}>
            <Switch>
                <Route path={`${match.path}/`} exact component={StartPage}/>
                <Route path={`${match.path}/board`} component={BoardPage}/>
                <Route path={`${match.path}/finish`} component={FinishPage}/>
            </Switch>
        </PokemonsContext.Provider>
    );
};

export default GamePage;
