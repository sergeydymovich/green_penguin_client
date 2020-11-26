import styles from "./ProductList.module.css";
import { useSelector } from 'react-redux';

export default function Main() {
const products = useSelector(state => state.products.productsArr);

  return (
    <div className={styles.productsContainer}>
      {products.map(el => (
        <div className={styles.productContainer}>
          <div className={styles.imageWrapper}>
            <img className={styles.image} src={el.image} />
          </div>         
          <p className={styles.name}>{el.name}</p>
          <div className={styles.info}>
            <p className={styles.price}>{el.price} руб/шт</p>
            {el.weight && <p className={styles.size}>{el.weight} гр</p>}
            {el.volume && <p className={styles.size}>{el.volume} мл</p>}
          </div>
          <div className={styles.productFooter}>
            <div className={styles.counter}>
              <button className={styles.counterBtn}>-</button>
              <p className={styles.count}>0</p>
              <button className={styles.counterBtn}>+</button>
            </div>
            <button className={styles.basketBtn}>в корзину</button>
          </div>
        </div>
      ))}
    </div>    
    
  )
}