import { HandySvg } from 'handy-svg';
import logo from '../../assets/icons/logo.svg';
import location from '../../assets/icons/location.svg';
import message from '../../assets/icons/message.svg';
import calling from '../../assets/icons/calling.svg';
import facebook from '../../assets/icons/facebook.svg';
import insta from '../../assets/icons/insta.svg';
import twitter from '../../assets/icons/twitter.svg';
import link from '../../assets/icons/link.svg';
import union from '../../assets/icons/union.svg';
import payments from '../../assets/icons/payments.svg';
import styles from './styles.module.scss';
export const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footer_head}>
                <div className={styles.footer_head_logo}>
                    <HandySvg src={logo} width="50px" height="50px" />
                    <h1 className={styles.footer_head_logo_title}>GREENSHOP</h1>
                </div>
                <div className={styles.footer_head_block}>
                    <HandySvg src={location} width='20px' height='20px' className={styles.footer_head_block_svg} />
                    <div className={styles.footer_head_block_text}>
                        <p>70 West Buckingham Ave.</p>
                        <p>Farmingdale, NY 11735</p>
                    </div>

                </div>
                <div className={styles.footer_head_block}>
                    <HandySvg src={message} width='20px' height='20px' className={styles.footer_head_block_svg} />
                    <p>contact@greenshop.com</p>
                </div>
                <div className={styles.footer_head_block}>
                    <HandySvg src={calling} width="20px" height="20px" className={styles.footer_head_block_svg} />
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
                        <div><HandySvg src={facebook} width='8px' height='16px' /></div>
                        <div><HandySvg src={insta} width='16px' height='16px' /></div>
                        <div><HandySvg src={twitter} width='16px' height='16px' /></div>
                        <div><HandySvg src={link} width='16px' height='16px' /></div>
                        <div><HandySvg src={union} width='19px' height='14px' /></div>
                    </div>
                    <h1>We accept</h1>
                    <div className={styles.footer_main_block_payments}>
                        <HandySvg src={payments} width='224px' height='26px' />
                    </div>
                </div>
            </div>

        </div>
    );
}