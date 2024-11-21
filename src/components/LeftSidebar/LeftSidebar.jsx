import styles from './styles.module.scss';
import action from '../../assets/icons/action.png';
export const LeftSidebar = () => {
    return (
        <div className={styles.sidebar}>
            <h3>Categories</h3>
            <div className={styles.text_container}>
                <p className={styles.active}>House Plants<span>{'(33)'}</span></p>
                <p>Potter Plants<span>{'(12)'}</span></p>
                <p>Seeds<span>{'(65)'}</span></p>
                <p>Small Plants<span>{'(39)'}</span></p>
                <p>Big Plants<span>{'(23)'}</span></p>
                <p>Succulents<span>{'(17)'}</span></p>
                <p>Terrariums<span>{'(19)'}</span></p>
                <p>Gardening<span>{'(13)'}</span></p>
                <p>Accessories<span>{'(18)'}</span></p>
            </div>
            <h3>Price range</h3>
            <div>Range component</div>
            <h3>Size</h3>
            <div className={styles.text_container}>
                <p>Small<span>{'(119)'}</span></p>
                <p>Medium<span>{'(86)'}</span></p>
                <p>Large<span>{'(78)'}</span></p>
            </div>

            <img src={action} alt="err" />
        </div>
    );
}