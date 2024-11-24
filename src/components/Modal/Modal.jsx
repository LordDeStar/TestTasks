import { useState } from 'react';
import styles from './styles.module.scss';
import close from '../../assets/icons/close.svg';
import { Auth } from '../Auth/Auth';
import { Reg } from '../Reg/Reg';
import { HandySvg } from 'handy-svg';
export const ModalAuth = ({ closing }) => {
    const [isAuth, setIsAuth] = useState(true);
    return (
        <div>
            <div className={styles.modal_outlay}>

            </div>
            <div className={styles.modal}>
                <button className={styles.modal_close_button} onClick={() => { closing() }}>
                    <HandySvg src={close} width='18px' height='18px' className={styles.modal_close_button_svg} />
                </button>
                <div className={styles.modal_toggle}>
                    <p className={isAuth ? styles.modal_toggle_active : ''} onClick={() => { setIsAuth(true) }}>Login</p>
                    <p>|</p>
                    <p className={isAuth ? '' : styles.modal_toggle_active} onClick={() => { setIsAuth(false) }}>Register</p>
                </div>
                {isAuth ? <Auth /> : <Reg />}
            </div>
        </div>
    );
}