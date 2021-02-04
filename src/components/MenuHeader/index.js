import {useState}           from 'react';
import {State as MenuState} from 'components/Menu';

import NavBar from 'components/NavBar';
import Menu   from 'components/Menu';

import s from './style.module.css';


const MenuHeader = ({isBgActive}) => {
    const [menuState, setMenuState] = useState(MenuState.NONE);
    const handleClick = () => {
        setMenuState(MenuState.OPENED === menuState ? MenuState.CLOSED : MenuState.OPENED);
    }

    return (
        <div>
            <NavBar
                isActive={MenuState.OPENED === menuState}
                isBgActive={isBgActive}
                onClick={handleClick}
            />
            <Menu state={menuState}/>
        </div>
    );
};

export default MenuHeader;
