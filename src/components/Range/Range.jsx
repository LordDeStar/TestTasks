import { useRef, useState } from 'react';
import styles from './styles.module.scss';

export const Range = ({ label, charBefore, min, max }) => {
    const [leftValue, setLeftValue] = useState(min);
    const [rightValue, setRightValue] = useState(max);
    const containerRef = useRef(null);

    const handleMouseMove = (e, setValue) => {
        const containerRect = containerRef.current.getBoundingClientRect();
        const posX = e.clientX - containerRect.left;
        const containerWidth = containerRect.width;
        const value = (max - min) * (posX / containerWidth) + min;

        // Ограничение значения в пределах min и max
        const clampedValue = Math.max(min, Math.min(value, max));
        setValue(clampedValue);
    };

    const handleMouseDown = (e, setValue) => {
        const handleMouseMoveWrapper = (event) => handleMouseMove(event, setValue);
        const handleMouseUp = () => {
            document.removeEventListener('mousemove', handleMouseMoveWrapper);
            document.removeEventListener('mouseup', handleMouseUp);
        };
        document.addEventListener('mousemove', handleMouseMoveWrapper);
        document.addEventListener('mouseup', handleMouseUp);
    };

    return (
        <div className={styles.range_container}>
            <div className={styles.range} ref={containerRef}>
                <div
                    className={styles.range_full}
                    style={{
                        left: `${((leftValue - min) / (max - min)) * 100}%`,
                        width: `${((rightValue - leftValue) / (max - min)) * 100}%`,
                    }}
                />
                <div
                    className={styles.thumb}
                    style={{
                        left: `${((leftValue - min) / (max - min)) * 100}%`,
                    }}
                    onMouseDown={(e) => handleMouseDown(e, setLeftValue)}
                />
                <div
                    className={styles.thumb}
                    style={{
                        left: `${((rightValue - min) / (max - min)) * 100}%`,
                    }}
                    onMouseDown={(e) => handleMouseDown(e, setRightValue)}
                />
            </div>
            <p>{label} <span>{charBefore}{leftValue.toFixed(2)}</span> - <span>{charBefore}{rightValue.toFixed(2)}</span></p>
            <button className={styles.range_button}>Filter</button>
        </div>
    );
};