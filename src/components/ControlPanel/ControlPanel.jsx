import { useState } from 'react';
import styles from './styles.module.scss';
import { Option, Select } from '../Select/Select';

export const ControlPanel = () => {
    const [active, setActive] = useState(null);

    const handlerClick = (e) => {
        setActive(e.target.textContent);
    };

    return (
        <div className={styles.panel}>
            <div className={styles.panel_links}>
                <p
                    onClick={handlerClick}
                    className={active === 'All Plants' ? styles.panel_links_active : ''}
                >
                    All Plants
                </p>
                <p
                    onClick={handlerClick}
                    className={active === 'New Arrivals' ? styles.panel_links_active : ''}
                >
                    New Arrivals
                </p>
                <p
                    onClick={handlerClick}
                    className={active === 'Sale' ? styles.panel_links_active : ''}
                >
                    Sale
                </p>
            </div>
            <Select label={"Sort by"}>
                <Option value={'default'}>Default sorting</Option>
                <Option value={'cost'}>Cost</Option>
            </Select>
        </div>
    );
};