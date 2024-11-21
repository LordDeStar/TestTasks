import { useRef, useState } from 'react';
import styles from './styles.module.scss';
export const Range = ({ label, charBefore }) => {

    const left = useRef();
    const right = useRef();
    const full = useRef();

    const [isLeftActive, setIsLeftActive] = useState(false);
    const [isRightActive, setIsRightActive] = useState(false);
    const handlerLeftMove = (e) => {
        if (!isLeftActive) return
        left.current.style.left = e.clientX + 'px';
    }

    const handlerRightMove = (e) => {
        if (!isRightActive) return
        right.current.style.right = e.clientX + 'px';
    }
    return (
        <div className={styles.range}>
            <div className={styles.range_circle} ref={left} onMouseUp={() => { setIsLeftActive(false) }} onMouseDown={() => { setIsLeftActive(true) }} onMouseMove={handlerLeftMove}></div>
            <div className={styles.range_full} ref={full}></div>
            <div className={styles.range_circle} ref={right} onMouseUp={() => { setIsRightActive(false) }} onMouseDown={() => { setIsRightActive(true) }} onMouseMove={handlerRightMove}></div>
        </div>
    );
}