import { useState, useRef } from 'react';
import styles from './styles.module.scss';
import hide from '../../assets/icons/Hide.svg';
import google from '../../assets/icons/google 1.png';
import facebook from '../../assets/icons/facebook 1.png';
import { HandySvg } from 'handy-svg';
export const Reg = () => {
    const login = useRef(null);
    const pass = useRef(null);
    const email = useRef(null);
    const confirm = useRef(null);
    const [showPassword, setShowPassword] = useState(false);
    const [focused, setFocused] = useState(false);

    const handleClick = () => {
        if (confirm.current.value !== pass.current.value) {
            alert('Password must be equals');
            return;
        }
        fetch('http://localhost:3500/reg', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ login: login.current.value, pass: pass.current.value, email: email.current.value })
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
            <p>Enter your username and password to register.</p>
            <input type="text" ref={login} className={styles.auth_input} placeholder="Username" />
            <input type="text" ref={email} className={styles.auth_input} placeholder="Enter your email address" />
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
            <input type="text" ref={confirm} className={styles.auth_input} placeholder="Confirm Password" />

            <button className={styles.auth_button} onClick={handleClick}>Register</button>
            <hr />
            <p className={styles.auth_hr_text}>Or login with</p>
            <button className={styles.auth_with}><img src={google} alt="" />Login with Google</button>
            <button className={styles.auth_with}><img src={facebook} alt="" />Login with Facebook</button>

        </div>
    );
};
