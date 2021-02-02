import NavBar from 'components/NavBar';
import Menu   from 'components/Menu';

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
