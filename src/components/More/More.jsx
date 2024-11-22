import styles from './styles.module.scss';
import arrow from '../../assets/icons/arrowMore.png';
export const More = ({ title, image, children }) => {
    return (
        <div className={styles.more}>
            <div className={styles.more_circle}></div>
            <div className={styles.more_circle_thin}></div>
            <div className={styles.more_background}></div>
            <img src={image} alt="" className={styles.more_image} />
            <div className={styles.more_text}>
                <h2 className={styles.more_text_title}>{title}</h2>
                <p className={styles.more_text}>{children}</p>
                <button>Find More <img src={arrow} alt="" /></button>
            </div>
        </div>
    );
}