import { useNavigate } from 'react-router-dom';
import styles from './filter-items.module.scss'

const FilterItemsViev = ({ title = '', id = '', style = '', handleClick = null, cRef = null, include = false, exclude = false }) => {
    const navigate = useNavigate();
    const handleTags = ()=>{
        navigate('');
    }
    return (
        <span 
            key={title}
            ref={cRef} 
            className={`${styles.exemplar} ${style} ${include === true ? styles.include : ''} ${exclude === true ? styles.exclude : ''}`} 
            onClick={handleClick} 
            id={title.split(' ').join('-')}
            data-id={id}
        >
            {title}
        </span>
    );
};

export default FilterItemsViev;