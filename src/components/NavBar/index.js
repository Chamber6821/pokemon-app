import cn from 'classnames';

import s from './style.module.css';


const NavBar = () => {
    return (
        <nav id="navbar">
            <div className={s.navWrapper}>
                <p className={s.brand}>
                    LOGO
                </p>
                <a className={cn(s.menuButton, s.active)}>
                    <span/>
                </a>
            </div>
        </nav>
    );
};

export default NavBar;
