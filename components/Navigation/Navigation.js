import styles from "./Navigation.module.css";
import { useSelector } from 'react-redux';


export default function Navigation() {
  const categories = useSelector(state => state.categories.categoriesArr);

  return (
    <div className={styles.navigation}>
      <ul className={styles.nav}>
        {categories.map((el) => (
          <li className={styles.item}>{el.name}</li>
        ))}
      </ul>
      <div className={styles.cardWrapper}>
      <img
        src="/basket.svg"
        className={styles.card}
        alt="search-icon"
      />
      <div className={styles.cardInfo}>
        <p className={styles.name}>Корзина</p>
        <p className={styles.price}>12руб 63к</p>
      </div>     
      </div>
    </div>    
    
  )
}