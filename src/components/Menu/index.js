import cn from 'classnames';
import {Link} from 'react-router-dom';

import s from './style.module.css';

const menuItems = [
    {
        title: 'HOME',
        to:    '/'
    }, {
        title: 'GAME',
        to:    '/game'
    }, {
        title: 'ABOUT',
        to:    '/about'
    }, {
        title: 'CONTACT',
        to:    '/contact'
    }
]


const Menu = ({state, onClickItem}) => {
    const handleClickItem = () => onClickItem && onClickItem()
    return (
        <div className={cn(s.menuContainer, {
            [s.active]:   State.OPENED === state,
            [s.inactive]: State.CLOSED === state
        })}>
            <div className={s.overlay}/>
            <div className={'menuItems'}>
                <ul>
                    {
                        menuItems.map(({title, to}, index) =>
                            <li key={index}>
                                <Link
                                    to={to}
                                    onClick={handleClickItem}
                                >
                                    {title}
                                </Link>
                            </li>
                        )
                    }
                </ul>
            </div>
        </div>
    );
};

export const State = Object.freeze({
    NONE:   'none',
    OPENED: 'opened',
    CLOSED: 'closed'
})

export default Menu;
