import { useState } from 'react';
import styles from './styles.module.scss';
import arrow from '../../assets/icons/arrow2.png';

export const Pagination = ({ count }) => {
    const [active, setActive] = useState(0);

    const handleNextClick = () => {
        setActive((prevActive) => (prevActive < count - 1 ? prevActive + 1 : 0));
    };

    const handleClick = (index) => {
        setActive(index);
    };

    const renderElements = () => {
        const elements = [];
        for (let i = 0; i < count; i++) {
            elements.push(
                <div
                    key={i}
                    className={`${styles.pagination_block} ${i === active ? styles.pagination_block_active : ''}`}
                    onClick={() => handleClick(i)}
                >
                    {i + 1}
                </div>
            );
        }
        return elements;
    };

    return (
        <div className={styles.pagination}>
            {renderElements()}
            <div className={styles.pagination_block} onClick={handleNextClick}>
                <img src={arrow} alt="Next" />
            </div>
        </div>
    );
};