import {Link}     from 'react-router-dom';
import {useState} from 'react';

import PrimaryButton from 'components/PrimaryButton';
import PokemonCard   from 'components/PokemonCard';
import Layout        from 'components/Layout';

import s from './style.module.css';

import PokemonData from 'assets/json/pokemonData';


const initPokemons = PokemonData.map((item) => ({
    isActive: false,
    chars:    item
}));

const GamePage = () => {
    const [pokemons, update] = useState(initPokemons);
    const handleClickPokemon = (id) => () => {
        update(pokemons => pokemons.map(({isActive, chars}) => {
            if (chars.id === id) isActive = true;
            return {isActive: isActive, chars: chars};
        }));
    }
    return (
        <>
            <h1>Game Page</h1>
            <PrimaryButton>
                <Link to="/">
                    Back to Home
                </Link>
            </PrimaryButton>
            <Layout title="Cards" colorTitle="white" colorBg="#404040">
                <div className={s.flex}>
                    {
                        pokemons.map(({isActive, chars}) => <PokemonCard
                            key={chars.id}
                            isActive={isActive}
                            data={chars}
                            onClick={handleClickPokemon(chars.id)}
                        />)
                    }
                </div>
            </Layout>
        </>
    );
};

export default GamePage;
