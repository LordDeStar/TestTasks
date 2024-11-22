import { useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss';
import logo from '../../assets/icons/logo.svg';
import search from '../../assets/icons/search.svg';
import baskets from '../../assets/icons/basket.svg';
import login from '../../assets/icons/login.png';
import { HandySvg } from 'handy-svg';
import { ModalAuth } from '../Modal/Modal';
export const Header = () => {
    const [underlineWidth, setWidth] = useState(0);
    const [underlineLeft, setLeft] = useState(0);
    const [modalShow, setShow] = useState(false);
    const handleLinkClick = (e) => {

        const { width, left } = e.target.getBoundingClientRect();

        setWidth(width);
        setLeft(left);
    }
    
    return (
        <div className={styles.header}>
            <div className={styles.header_logo}>
                <HandySvg src={logo} width="50" heigth="50" />
                <h1>GREENSHOP</h1>
            </div>
            <div className={styles.header_nav}>
                <a href="#" className={styles.header_nav_link} onClick={handleLinkClick}>Home</a>
                <a href="#" className={styles.header_nav_link} onClick={handleLinkClick}>Shop</a>
                <a href="#" className={styles.header_nav_link} onClick={handleLinkClick}>Plamt Care</a>
                <a href="#" className={styles.header_nav_link} onClick={handleLinkClick}>Blogs</a>
                <div className={styles.underline} style={{ width: underlineWidth, left: (underlineLeft - 592) + "px" }} />
            </div>
            <div className={styles.header_menu}>
                <button><HandySvg src={search} width="25" height="25" /></button>
                <button className={styles.basket}><HandySvg src={baskets} width="25" heigth="25" /><span className={styles.basket_circle}>7</span> </button>
                <button className={styles.login} onClick={()=>{setShow(true)}}><img src={login} alt="err" />Login</button>
            </div>
            {modalShow && <ModalAuth closing={()=>{setShow(false)}}/>}
        </div>
    );
}