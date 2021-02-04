import s from './style.module.css';

const PrimaryButton = ({onClick, children}) => {
    const handleClick = () => onClick && onClick();
    return (
        <button className={s.primaryButton} onClick={handleClick}>
            {children}
        </button>
    );
};

export default PrimaryButton;
