import {Link} from 'react-router-dom';
import cn     from 'classnames';

import s from './style.module.css';


const PrimaryButton = ({className, to, onClick, children}) => {
    const handleClick = () => onClick && onClick();
    return (
        <button className={cn(className, s.primaryButton)} onClick={handleClick}>
            <Link to={to}>
                {children}
            </Link>
        </button>
    );
};

export default PrimaryButton;
