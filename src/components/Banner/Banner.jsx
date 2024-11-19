import { Carousel, Slide } from '../Carousel/Carousel';
import styles from './styles.module.scss';
import bigImage from '../../assets/icons/plant.svg';
import { HandySvg } from 'handy-svg';
export const Banner = () => {
    return (
        <Carousel>
            <Slide index={2}>
                <div className={styles.banner}>
                    <div className={styles.banner_text}>
                        <h4>WELCOME TO GREENSHOP</h4>
                        <h1>LET'S MAKE A BETTER <span className={styles.green_text}>PLANET</span></h1>
                        <p>We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!</p>
                        <button className={styles.shop_button}>SHOP NOW</button>
                    </div>
                    <div className={styles.banner_images}>
                        <HandySvg key="big-image" src={bigImage} width="410" height="410" />
                        <HandySvg key="small-image" src={bigImage} width="200" height="200" />
                    </div>
                </div>
            </Slide>
            <Slide index={1}>
                <div className={styles.undefined}>
                    <h1>Посмотрите! Карусель рабоатет!</h1>
                </div>
            </Slide>
            <Slide index={3}>
                <div className={styles.undefined}>
                    <h1>Я не представляю, чем еще можно наполнить. В макете был только один слайд</h1>
                </div>
            </Slide>
        </Carousel>
    );
}