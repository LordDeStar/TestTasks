import { LeftSidebar } from '../LeftSidebar/LeftSidebar';
import { Plants } from '../Plants/Plants';
import styles from './styles.module.scss';
export const Interesting = () => {
    return (
        <div className={styles.interesting}>
            <LeftSidebar />
            <Plants />
        </div>
    );
} 