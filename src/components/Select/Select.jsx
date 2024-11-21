import { useState, useEffect, useRef } from 'react';
import styles from './styles.module.scss';
import arr from '../../assets/icons/arr.png';
import { HandySvg } from 'handy-svg';
export const Option = ({ value, children }) => {
    return <>{children}</>;
};

export const Select = ({ label, children }) => {
    const [text, setText] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef();

    useEffect(() => {
        if (ref.current) {
            ref.current.style.border = isOpen ? "1px solid black" : '';
            ref.current.style.height = isOpen ? '100px' : '0px';
        }
    }, [isOpen]);

    const handlerClick = (e) => {
        setIsOpen(!isOpen);
    };

    const handlerOptionClick = (value) => {
        setText(value);
        setIsOpen(false);
    };

    return (
        <div className={styles.select}>
            <div className={styles.select_display}>
                <p>{label}: {text}</p>
                <button onClick={handlerClick}><img src={arr} alt="" /></button>
            </div>
            <div ref={ref} className={styles.select_options}>
                {children.map((option) => (
                    <p
                        key={option.props.value}
                        onClick={() => handlerOptionClick(option.props.children)}
                    >
                        {option.props.children}
                    </p>
                ))}
            </div>
        </div>
    );
};