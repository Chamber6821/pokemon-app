import s from './style.module.css';

const Layout = ({id, title, desc, urlBg, colorBg}) => {
    const style = {
        background: urlBg ? `url(${urlBg})` : (colorBg ? colorBg : null)
    }
    return (
        <section className={s.root} id={id}>
            <div className={s.wrapper} style={style}>
                <article>
                    {title && (
                        <div className={s.title}>
                            <h3>{title}</h3>
                            <span className={s.separator}/>
                        </div>
                    )}
                    {desc && (
                        <div className={[s.desc, s.full].join(' ')}>
                            <p>{desc}</p>
                        </div>
                    )}
                </article>
            </div>
        </section>
    );
};

export default Layout;
