import cn from 'classnames';

import s from './style.module.css';


const NavBar = ({isActive, isBgActive = true, onClick}) => {
    const handleClick = () => onClick && onClick();

    return (
        <nav className={cn(s.navbar, {[s.bgActive]: isBgActive})}>
            <div className={s.navWrapper}>
                <p className={s.brand}>
                    LOGO
                </p>
                <div
                    className={cn(s.menuButton, {[s.active]: isActive})}
                    onClick={handleClick}
                >
                    <span/>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
