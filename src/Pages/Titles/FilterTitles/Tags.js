import FilterItems from "../../../SharedUI/Filter/FilterItems";
import FilterItemsViev from "../../../SharedUI/Filter/FilterItemsViev";
import styles from "./filter-titles.module.scss";

const Tags = ({ tags = [], isFlexBox = false }) => {
    
  return ( 
    <div className={styles.tags} style={{display:'flex' ,flexWrap:'wrap'}}>
      {tags?.map((tag) => {
        return (
          <>
            {tag.tags?.map((item, index) => (
              <FilterItemsViev
                key={item?.attributes?.name?.en ?? item}
                title={item?.attributes?.name?.en ?? item}
                id={item?.id}
                // handleClick={handleClick}
              />
            ))}
            {/* <FilterItems items={tag.tags} isSpecific={isFlexBox} type={tag.type} /> */}
          </>
        );
      })}
    </div>
  );
};

export default Tags;
