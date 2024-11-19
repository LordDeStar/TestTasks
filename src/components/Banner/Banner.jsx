import styles from './styles.module.scss';
export const Banner = ()=>{
    return (
        <div className={styles.banner}>
            <h4>WELCOME TO GREENSHOP</h4>
            <h1>LET'S MAKE A</h1>
            <h1>BETTER <span>PLANET</span></h1>
        </div>
    );
}