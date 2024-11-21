import { HandySvg } from 'handy-svg';
import styles from './styles.module.scss';
import basket from '../../assets/icons/basket.svg';
import heart from '../../assets/icons/heart.svg';
import search from '../../assets/icons/search.svg';
import { useRef, useState } from 'react';
export const PlantCard = ({ img, text, cost, discount = 'none' }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div className={styles.card}>
            {discount !== 'none' && <div className={styles.card_discount}>{discount}</div>}
            <img src={img} alt="" className={styles.card_img} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
            <h3 className={styles.card_text}>{text}</h3>
            <h3 className={styles.card_cost}>${cost}</h3>
            <div className={`${styles.card_buttons} ${isHovered ? styles.active : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <button className={styles.card_buttons_basket}><HandySvg src={basket} height='20px' width='20px' /></button>
                <button className={styles.card_buttons_heart}><HandySvg src={heart} height='20px' width='20px' /></button>
                <button className={styles.card_buttons_search}><HandySvg src={search} height='20px' width='20px' /></button>
            </div>
        </div>
    );
};