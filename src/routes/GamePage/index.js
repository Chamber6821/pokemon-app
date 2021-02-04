import Header        from 'components/Header';
import PrimaryButton from '../../components/PrimaryButton';

import s from './style.module.css';


const GamePage = ({onGoToPage}) => {
    const handleGoToPage = (page) => () => {
        onGoToPage && onGoToPage(page);
    }

    return (
        <Header title="Game Page">
            <PrimaryButton
                title="Back to Home"
                onClick={handleGoToPage('home')}
            />
        </Header>
    );
};

export default GamePage;
