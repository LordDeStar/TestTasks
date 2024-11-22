import { HandySvg } from 'handy-svg';
import logo from '../../assets/icons/logo.svg';
import styles from './styles.module.scss';
export const Footer = ()=>{
    return ( 
        <div className={styles.footer}>
            <div className={styles.footer_head}>
                <div className={styles.footer_head_logo}>
                    <HandySvg src={logo} width="50" heigth="50" />
                    <h1 className={styles.footer_head_logo_title}>GREENSHOP</h1>
                </div>
                <div className={styles.footer_head_block}>
                    <p>70 West Buckingham Ave.</p>
                    <p>Farmingdale, NY 11735</p>
                </div>
                <div className={styles.footer_head_block}>
                    <p>contact@greenshop.com</p>
                </div>
                <div className={styles.footer_head_block}>
                    <p>+88 01911 717 490</p>
                </div>
            </div>
            <div className={styles.footer_main}>
                <div className={styles.footer_main_block}>
                    <h1>My Account</h1>
                    <p>My Account</p>
                    <p>Our stores</p>
                    <p>Contact us</p>
                    <p>Career</p>
                    <p>Specials</p>
                </div>
                <div className={styles.footer_main_block}>
                    <h1>Help & Guide</h1>
                    <p>Help Center</p>
                    <p>How to By</p>
                    <p>Shipping & Delivery</p>
                    <p>Product Policy</p>
                    <p>How to Return</p>
                </div>
                <div className={styles.footer_main_block}>
                    <h1>Categories</h1>
                    <p>House Plants</p>
                    <p>Potter Plants</p>
                    <p>Seeds</p>
                    <p>Small Plants</p>
                    <p>Accessories</p>
                </div>
                <div className={styles.footer_main_block}>
                    <h1>Social Media</h1>
                    <div className={styles.footer_main_block_media}>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <h1>We accept</h1>
                    <div className={styles.footer_main_block_payments}>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>

        </div>
    );
}