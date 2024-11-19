import { useState, useRef } from 'react';
import styles from './styles.module.scss';
export const Slide = ({index, children})=>{
    return (
        <>{children}</>
    );
}
export const Carousel = ({children})=>{
    const items = useRef([]);
    const [activeSlide, setSlide] = useState(1);
    const handleNextClick = ()=>{
        if (activeSlide < children.length){
            setSlide(activeSlide + 1);
        }
        else{
            setSlide(1);
        }
        recolorItems()
    }
    const handleBackClick = ()=>{
        if (activeSlide > 1){
            setSlide(activeSlide - 1);
        }
        else{
            setSlide(children.length);
        }
        recolorItems()
    }
    const recolorItems = ()=>{
        items.current.forEach(item=>{
            item.style.backgroundColor = '#46a35981';
        });
        if (items.current[activeSlide+1])
            items.current[activeSlide+1].style.backgroundColor = '#46a358';
    }
    const handleSlideControlItemClick = (index)=>{
        recolorItems();
        setSlide(index);
        
    }
    return (
        <div className={styles.carousel}>
            <button className={styles.carousel_back} onClick={()=>{handleBackClick()}}></button>
            <div className={styles.carousel_content}>
                {children.map(slide=>(
                    activeSlide === slide.props.index && <div key={slide.props.index} className={styles.carousel_slide}>{slide.props.children}</div>
                ))}
            </div>
            <button className={styles.carousel_next} onClick={()=>{handleNextClick()}}></button>
            <div className={styles.carousel_images}></div>
            <div className={styles.carousel_slide_control}>
                {children.map((slide, index) =>(
                    <div key={index} ref={(e)=>{items.current[index] = e}} className={styles.carousel_slide_control_item} onClick={()=>{handleSlideControlItemClick(index+1)}}></div>
                ))}
            </div>
        </div>
    );
}