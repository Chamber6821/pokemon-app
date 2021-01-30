import s from './style.module.css';

const Layout = ({id, title, urlBg, colorBg, colorTitle = 'black', children}) => {
    const style = {
        background: urlBg ? `url(${urlBg})` : (colorBg ? colorBg : null)
    }
    return (
        <section className={s.root} id={id}>
            <div className={s.wrapper} style={style}>
                <article>
                    {title && (
                        <div className={s.title} style={{color: colorTitle}}>
                            <h3>{title}</h3>
                            <span className={s.separator}/>
                        </div>
                    )}
                    {children && (
                        <div className={[s.desc, s.full].join(' ')}>
                            {children}
                        </div>
                    )}
                </article>
            </div>
        </section>
    );
};

export default Layout;
