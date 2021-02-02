import {useState} from 'react';
import cn         from 'classnames';

import s from './style.module.css';


const Menu = () => {
    console.log('New menu');

    return (
        <div className={cn(s.menuContainer, s.active)}>
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

export default Menu;
