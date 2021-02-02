import {useState} from 'react';

import NavBar from 'components/NavBar';
import Menu   from 'components/Menu';

import s from './style.module.css';


const MenuHeader = () => {
    const [isActive, setActive] = useState(false);
    const handleClick = () => {
        setActive(!isActive);
    }

    return (
        <div>
            <NavBar
                isActive={isActive}
                onClick={handleClick}
            />
            <Menu isActive={isActive}/>
        </div>
    );
};

export default MenuHeader;
