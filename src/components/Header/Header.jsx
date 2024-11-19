import { useEffect, useRef, useState } from 'react';
import styles from './styles.module.css';
export const Header = ()=>{
    const underline= useRef();
    const [underlineWidth, setWidth] = useState(0);
    const [underlineLeft, setLeft] = useState(0);
    const handleLinkClick = (e)=>{
        
        const {width, left} = e.target.getBoundingClientRect();
        
        setWidth(width);
        setLeft(left);
    }
    return (
        <div className={styles.header}>
            <div className={styles.header_logo}>
                <img src="" alt="" />
                <h1>GREENSHOP</h1>
            </div>
            <div className={styles.header_nav}>
                <a href="#" className={styles.header_nav_link} onClick={handleLinkClick}>Home</a>
                <a href="#" className={styles.header_nav_link} onClick={handleLinkClick}>Shop</a>
                <a href="#" className={styles.header_nav_link} onClick={handleLinkClick}>Plamt Care</a>
                <a href="#" className={styles.header_nav_link} onClick={handleLinkClick}>Blogs</a>
                <div className={styles.underline} style={{width: underlineWidth, left: (underlineLeft - 512)+ "px"}}/>
            </div>
            <div className={styles.header_menu}>
                <button id='search'><span></span></button>
                <button id='basket'><span></span><span></span></button>
                <button id='login'><span></span>Login</button>
            </div>
        </div>
    );
}