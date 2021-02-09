import {Switch, Route, useRouteMatch, Redirect} from 'react-router-dom';
import cn                                       from 'classnames';

import MenuHeader  from 'components/MenuHeader';
import Footer      from 'components/Footer';
import HomePage    from 'routes/Home';
import GamePage    from 'routes/Game';
import AboutPage   from 'routes/About';
import ContactPage from 'routes/Contact';
import NotFound    from 'routes/NotFound';

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
