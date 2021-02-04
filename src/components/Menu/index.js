import cn from 'classnames';

import s from './style.module.css';


const Menu = ({state}) => {
    return (
        <div className={cn(s.menuContainer, {
            [s.active]:   MenuState.OPENED === state,
            [s.inactive]: MenuState.CLOSED === state
        })}>
            <div className={s.overlay}/>
            <div className={'menuItems'}>
                <ul>
                    <li>
                        <a href="#welcome">
                            HOME
                        </a>
                    </li>
                    <li>
                        <a href="#game">
                            GAME
                        </a>
                    </li>
                    <li>
                        <a href="#about">
                            ABOUT
                        </a>
                    </li>
                    <li>
                        <a href="#contact">
                            CONTACT
                        </a>
                    </li>
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
