import cn from 'classnames';

import s from './style.module.css';

const menuItems = [
    {
        title: 'HOME',
        to:    '#home'
    }, {
        title: 'GAME',
        to:    '#game'
    }, {
        title: 'ABOUT',
        to:    '#about'
    }, {
        title: 'CONTACT',
        to:    '#contact'
    }
]


const Menu = ({state}) => {
    return (
        <div className={cn(s.menuContainer, {
            [s.active]:   MenuState.OPENED === state,
            [s.inactive]: MenuState.CLOSED === state
        })}>
            <div className={s.overlay}/>
            <div className={'menuItems'}>
                <ul>
                    {
                        menuItems.map(({title, to}, index) =>
                            <li key={index}>
                                <a href={to}>{title}</a>
                            </li>
                        )
                    }
                </ul>
            </div>
        </div>
    );
};

export const MenuState = {
    NONE:   'none',
    OPENED: 'opened',
    CLOSED: 'closed'
}

export default Menu;
