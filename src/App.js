import {useState} from 'react';

import HomePage from 'routes/HomePage';
import GamePage from 'routes/GamePage';

import './App.css';
import './index.css';

function App() {
    const [currentPage, setPage] = useState('home');
    const handleGoToPage = (page) => {
        console.log(`Change page from '${currentPage}' to '${page}'`);
        setPage(page);
    }

    switch (currentPage) {
        case 'home':
            return <HomePage onGoToPage={handleGoToPage}/>;
        case 'game':
            return <GamePage onGoToPage={handleGoToPage} />;
        default:
            return <HomePage onGoToPage={handleGoToPage} />;
    }
}

export default App;
