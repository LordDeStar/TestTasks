import { useState } from 'react';
import styles from './styles.module.scss';
import { Auth } from '../Auth/Auth';
import { Reg } from '../Reg/Reg';
export const ModalAuth = ({ closing }) => {
    const [isAuth, setIsAuth] = useState(true);
    return (
        <div className={styles.modal}>
            <div className={styles.modal_toggle}>
                <p className={isAuth ? styles.modal_toggle_active : ''} onClick={() => { setIsAuth(true) }}>Login</p>
                <p>|</p>
                <p className={isAuth ? '' : styles.modal_toggle_active} onClick={() => { setIsAuth(false) }}>Register</p>
            </div>
            {isAuth ? <Auth /> : <Reg />}
        </div>
    );
}