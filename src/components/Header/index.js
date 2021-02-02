import s from './style.module.css';

const Header = ({title, desc, children}) => {
    return (
        <header className={s.root}>
            <div className={s.forest}/>
            <div className={s.container}>
                {title && <h1>{title}</h1>}
                {desc && <p>{desc}</p>}
                {children && <div>{children}</div> }
            </div>
        </header>
    );
};

export default Header;
