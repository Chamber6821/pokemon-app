import {Link}     from 'react-router-dom';
import {useState} from 'react';

import PrimaryButton from 'components/PrimaryButton';
import PokemonCard   from 'components/PokemonCard';
import Layout        from 'components/Layout';

import s from './style.module.css';

import PokemonData from 'assets/json/pokemonData';


const GamePage = () => {
    const [_, update] = useState();
    const handleClickPokemon = (pokemon) => () => {
        pokemon.isActive = true;
        update(Math.random());
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
                        PokemonData.map((item) => <PokemonCard
                            key={item.id}
                            isActive={item.isActive}
                            data={item}
                            onClick={handleClickPokemon(item)}
                        />)
                    }
                </div>
            </Layout>
        </>
    );
};

export default GamePage;
