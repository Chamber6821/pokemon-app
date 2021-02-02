import Header from 'components/Header';

import s from './style.module.css';


const GamePage = ({onGoToPage}) => {
    const handleGoToPage = (page) => () => {
        onGoToPage && onGoToPage(page);
    }

    return (
        <Header title="Game Page">
            <button onClick={handleGoToPage('home')}>
                Back to Home
            </button>
        </Header>
    );
};

export default GamePage;
