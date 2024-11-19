import { useState, useRef, useEffect } from 'react';
import styles from './styles.module.scss';
export const Slide = ({ index, children }) => {
    return (
        <>{children}</>
    );
}
export const Carousel = ({ children }) => {
    const items = useRef([]);
    const [activeSlide, setSlide] = useState(1);
    const [isChanging, setIsChanging] = useState(false);

    useEffect(() => {
        recolorItems();
    }, [activeSlide]);

    const setActive = (index) => {
        setIsChanging(true);
        setTimeout(() => {
            setSlide(index);
            setIsChanging(false);
        }, 1000);
    }
    const handleNextClick = () => {
        if (activeSlide < children.length) {
            setActive(activeSlide + 1);
        }
        else {
            setActive(1);
        }
    }
    const handleBackClick = () => {
        if (activeSlide > 1) {
            setActive(activeSlide - 1);
        }
        else {
            setActive(children.length);
        }
    }
    const recolorItems = () => {
        items.current.forEach(item => {
            item.style.backgroundColor = '#46a35981';
        });
        if (items.current[activeSlide - 1])
            items.current[activeSlide - 1].style.backgroundColor = '#46a358';
    }
    return (
        <div className={styles.carousel}>
            <button className={styles.carousel_back} onClick={() => { handleBackClick() }}></button>
            <div className={styles.carousel_content}>
                {children.map(slide => (
                    activeSlide === slide.props.index && <div key={slide.props.index} className={isChanging ? styles.carousel_disabled : styles.carousel_slide}>{slide.props.children}</div>
                ))}
            </div>
            <button className={styles.carousel_next} onClick={() => { handleNextClick() }}></button>
            <div className={styles.carousel_images}></div>
            <div className={styles.carousel_slide_control}>
                {children.map((slide, index) => (
                    <div key={index} ref={(e) => { items.current[index] = e }} className={styles.carousel_slide_control_item} onClick={() => { setActive(index + 1) }}></div>
                ))}
            </div>
        </div>
    );
}