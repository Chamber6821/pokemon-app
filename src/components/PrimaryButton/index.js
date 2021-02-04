import s from './style.module.css';

const PrimaryButton = ({title, onClick}) => {
    return (
        <button className={s.primaryButton} onClick={onClick}>
            {title}
        </button>
    );
};

export default PrimaryButton;
