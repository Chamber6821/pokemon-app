import {Link} from 'react-router-dom';

import PrimaryButton from 'components/PrimaryButton';

import s from './style.module.css';


const GamePage = () => {
    return (
        <>
            <h1>Game Page</h1>
            <PrimaryButton>
                <Link to="/">
                    Back to Home
                </Link>
            </PrimaryButton>
        </>
    );
};

export default GamePage;
