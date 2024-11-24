import { useState, useRef } from 'react';
import styles from './styles.module.scss';
import hide from '../../assets/icons/Hide.svg';
import google from '../../assets/icons/google 1.png';
import facebook from '../../assets/icons/facebook 1.png';
import { HandySvg } from 'handy-svg';
export const Auth = () => {
    const login = useRef(null);
    const pass = useRef(null);
    const [showPassword, setShowPassword] = useState(false);
    const [focused, setFocused] = useState(false);

    const handleClick = () => {

        fetch('http://localhost:3500/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ login: login.current.value, pass: pass.current.value })
        })
            .then(response => response.json())
            .then(data => {
                alert(data.message);
            })
            .catch(err => alert(err));
    };

    const handleForgotPassword = () => {
        // Ваша логика для обработки клика на "Forgot Password?"
    };

    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState);
    };

    return (
        <div className={styles.auth}>
            <p>Enter your username and password to login.</p>
            <input type="text" ref={login} className={styles.auth_input} placeholder="Username" />
            <div className={styles.auth_input_container} style={{ outline: focused ? "2px solid #46A358" : "" }}>
                <input
                    type={showPassword ? "text" : "password"}
                    ref={pass}
                    className={styles.auth_input_pass}
                    placeholder="Password"
                    onFocus={() => { setFocused(true) }}
                    onBlur={() => { setFocused(false) }}
                />
                <button onBlur={() => { setFocused(false) }} onFocus={() => { setFocused(true) }} className={styles.auth_toggle_button} onClick={togglePasswordVisibility}>
                    <HandySvg src={hide} height='30' width='30' />
                </button>
            </div>
            <span className={styles.auth_forgot} onClick={handleForgotPassword}>Forgot Password?</span>
            <button className={styles.auth_button} onClick={handleClick}>Login</button>
            <hr />
            <p className={styles.auth_hr_text}>Or login with</p>
            <button className={styles.auth_with}><img src={google} alt="" />Login with Google</button>
            <button className={styles.auth_with}><img src={facebook} alt="" />Login with Facebook</button>

        </div>
    );
};
