import {Switch, Route, useRouteMatch, Redirect} from 'react-router-dom';
import cn                                       from 'classnames';

import MenuHeader  from 'components/MenuHeader';
import HomePage    from 'routes/HomePage';
import GamePage    from 'routes/GamePage';
import Footer      from './components/Footer';
import AboutPage   from './routes/AboutPage';
import ContactPage from './routes/ContactPage';
import NotFound    from './routes/NotFound';

import s from './style.module.css'


const App = () => {
    const match = useRouteMatch('/');
    return (
        <Switch>
            <Route path="/404" component={NotFound}/>
            <Route>
                <MenuHeader isBgActive={!match.isExact}/>
                <div className={cn(s.wrapper, {[s.noPadding]: match.isExact})}>
                    <Switch>
                        <Route path="/" exact component={HomePage}/>
                        <Route path="/game" component={GamePage}/>
                        <Route path="/about" component={AboutPage}/>
                        <Route path="/contact" component={ContactPage}/>
                        <Route render={() => <Redirect to="/404"/>}/>
                    </Switch>
                </div>
                <Footer/>
            </Route>
        </Switch>
    )
};

export default App;
