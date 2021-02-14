import {useState}           from 'react';
import {State as MenuState} from 'components/Menu';

import NavBar from 'components/NavBar';
import Menu   from 'components/Menu';


const MenuHeader = ({isBgActive}) => {
    const [menuState, setMenuState] = useState(MenuState.NONE);
    const handleClick = () => setMenuState(MenuState.OPENED === menuState ? MenuState.CLOSED : MenuState.OPENED)
    const handleClickItem = () => setMenuState(MenuState.CLOSED);

    return (
        <div>
            <NavBar
                isActive={MenuState.OPENED === menuState}
                isBgActive={isBgActive}
                onClick={handleClick}
            />
            <Menu
                state={menuState}
                onClickItem={handleClickItem}
            />
        </div>
    );
};

export default MenuHeader;
