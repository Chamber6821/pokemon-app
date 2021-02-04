import {Link} from 'react-router-dom';

import Header        from 'components/Header';
import Layout        from 'components/Layout';
import PokemonCard   from 'components/PokemonCard';
import PrimaryButton from 'components/PrimaryButton';

import s from './style.module.css';

import Pikachu     from 'assets/img/bg1.jpg';
import PokemonData from 'assets/json/pokemonData';


const HomePage = () => {
    return (
        <>
            <Header title="Pokemon Fight" desc="Created with React">
                <PrimaryButton>
                    <Link to="/game">
                        Start Game
                    </Link>
                </PrimaryButton>
            </Header>
            <Layout title="Rules" urlBg={Pikachu}>
                <p>
                    In the game two players face off against one another, one side playing as "blue", the other as "red"
                    on a 3x3 grid. Each player has five cards in a hand and the aim is to capture the opponent's cards
                    by turning them into the player's own color of red or blue.
                </p>
                <p>
                    To win, a majority of the total ten cards played (including the one card that is not placed on the
                    board) must be of the player's card color. To do this, the player must capture cards by placing a
                    card adjacent to an opponent's card whereupon the 'ranks' of the sides where the two cards touch
                    will be compared. If the rank of the opponent's card is higher than the player's card, the player's
                    card will be captured and turned into the opponent's color. If the player's rank is higher, the
                    opponent's card will be captured and changed into the player's color instead.
                </p>
            </Layout>
        </>
    );
};

export default HomePage;
