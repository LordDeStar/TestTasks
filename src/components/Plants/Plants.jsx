import styles from './style.module.scss';
import img1 from '../../assets/icons/1.png';
import img2 from '../../assets/icons/2.png';
import img3 from '../../assets/icons/3.png';
import img4 from '../../assets/icons/4.png';
import img5 from '../../assets/icons/5.png';
import img6 from '../../assets/icons/6.png';
import img7 from '../../assets/icons/7.png';
import img8 from '../../assets/icons/8.png';
import img9 from '../../assets/icons/9.png';
import { ControlPanel } from '../ControlPanel/ControlPanel';
import { PlantCard } from '../PlantCard/PlantCard';
import { Pagination } from '../Pagnation/Pagination';

const plants = [
    {
        img: img1,
        text: 'Barberton Daisy',
        cost: 119.00,
        discount: 'none'
    },
    {
        img: img2,
        text: 'Angel Wing Begonia',
        cost: 169.00,
        discount: 'none'
    },
    {
        img: img3,
        text: 'African Violet',
        cost: 199.00,
        discount: '13% OFF'
    },
    {
        img: img4,
        text: 'Beach Spider Lily',
        cost: 129.00,
        discount: 'none'
    },
    {
        img: img5,
        text: 'Blushing Bromeliad',
        cost: 139.00,
        discount: 'none'
    },
    {
        img: img6,
        text: 'Aluminum Plant',
        cost: 179.00,
        discount: 'none'
    },
    {
        img: img7,
        text: "Bird's Nest Fern",
        cost: 99.00,
        discount: 'none'
    },
    {
        img: img8,
        text: 'Broadleaf Lady Palm',
        cost: 59.00,
        discount: 'none'
    },
    {
        img: img9,
        text: 'Chinese Evergreen',
        cost: 39.00,
        discount: 'none'
    }
]
export const Plants = () => {

    return (
        <div className={styles.plants}>
            <ControlPanel />
            <div className={styles.plants_container}>
                {plants.map((plant, index) => (
                    <PlantCard img={plant.img} text={plant.text} cost={plant.cost} discount={plant.discount} />
                ))}
            </div>
            <Pagination count={4} />
        </div>
    );
}