import {Link}                from 'react-router-dom';
import {useState, useEffect} from 'react';

import PrimaryButton from 'components/PrimaryButton';
import PokemonCard   from 'components/PokemonCard';
import Layout        from 'components/Layout';

import s from './style.module.css';

import database from '../../services/firebase';


const GamePage = () => {
    const [pokemons, setPokemons] = useState([]);
    const handleClickPokemon = (id) => () => {
        setPokemons(pokemons.map((p) =>
            p.id === id ? {...p, active: !p.active} : p
        ));
    }

    useEffect(() => {
        database.ref('pokemons').once('value', (snapshot) => {
            setPokemons(Object.entries(snapshot.val()).map(([objId, p]) => ({
                objId: objId,
                active: false,
                ...p
            })));
        });
    }, [])

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
                        pokemons.map((p) => <PokemonCard
                            key={p.id}
                            isActive={p.active}
                            data={p}
                            onClick={handleClickPokemon(p.id)}
                        />)
                    }
                </div>
            </Layout>
        </>
    );
};

export default GamePage;
