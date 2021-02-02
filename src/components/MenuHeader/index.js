import NavBar from '../NavBar';
import Menu   from '../Menu';

import s from './style.module.css';


const MenuHeader = () => {
    return (
        <div>
            <NavBar/>
            <Menu/>
        </div>
    );
};

export default MenuHeader;
