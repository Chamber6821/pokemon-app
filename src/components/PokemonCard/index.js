import cn from 'classnames';

import s from './style.module.css';

import cardBackSide from 'assets/img/card-back-side.jpg';


const PokemonCard = ({
                         isActive = true,
                         isSelected = false,
                         minimize = false,
                         className,
                         onClick,
                         data: {id, name, type, img, values}
                     }) => {

    const handleClick = () => onClick && onClick()


    return (
        <div
            className={cn(className, s.pokemonCard, {[s.active]: isActive}, {[s.selected]: isSelected})}
            onClick={handleClick}
        >
            <div className={s.cardFront}>
                <div className={cn(s.wrap, s.front)}>
                    <div className={cn(s.pokemon, s[type] || s.none)}>
                        <div className={s.values}>
                            <div className={cn(s.count, s.top)}>{values.top}</div>
                            <div className={cn(s.count, s.right)}>{values.right}</div>
                            <div className={cn(s.count, s.bottom)}>{values.bottom}</div>
                            <div className={cn(s.count, s.left)}>{values.left}</div>
                        </div>
                        <div className={s.imgContainer}>
                            <img src={img} alt={name}/>
                        </div>
                        {!minimize && (
                            <div className={s.info}>
                                <span className={s.number}>#{id}</span>
                                <h3 className={s.name}>{name}</h3>
                                {/* s.type не существует */}
                                <small>
                                    Type: <span>{type}</span>
                                </small>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className={s.cardBack}>
                <div className={cn(s.wrap, s.back)}>
                    <img src={cardBackSide} alt="Card Backed"/>
                </div>
            </div>

        </div>
    );
};

export default PokemonCard;
