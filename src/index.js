import React    from 'react';
import ReactDOM from 'react-dom';

import Firebase          from 'services/firebase';
import {FirebaseContext} from 'context/firebaseContext';

import App             from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';

import './index.css';

ReactDOM.render((
    <BrowserRouter>
        <FirebaseContext.Provider value={new Firebase()}>
            <App/>
        </FirebaseContext.Provider>
    </BrowserRouter>
), document.getElementById('root'));

reportWebVitals();
