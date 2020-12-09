import styles from "./Navigation.module.css";
import Link from "next/link";
import { useSelector, useDispatch } from 'react-redux';
import { selectCategory } from "../../redux/requestSlice";
import cn from 'classnames/bind';


export default function Navigation() {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories.categoriesArr);
  const products = useSelector(state => state.cart.cartArr);
	const totalPrice = products.reduce((sum, current) => sum + current.price*current.count, 0).toFixed(2);

  return (
    <div className={styles.navigation}>
      <ul className={styles.nav}>
        {categories.map((el) => (
          <li 
            key={el._id}
            className={cn(styles.item, {[styles.growNavItem]: categories.length > 6})}
            onClick={() => dispatch(selectCategory(el.name))}
          >
            {el.name.toUpperCase()}
          </li>
        ))}
      </ul>
      <Link href="/cart">
        <div className={styles.cartWrapper}>  
          <img
            src="/cart.svg"
            className={styles.cart}
            alt="search-icon"
          />
          <div className={styles.cartInfo}>
            <p className={styles.name}>Корзина</p>
            <div className={styles.countWrapper}>
              <p>{products.length}</p>
            </div>      
            <p className={styles.price}>{Math.trunc(totalPrice)}руб. {((totalPrice - Math.trunc(totalPrice))*100).toFixed(0)}к.</p>
          </div>           
        </div>
      </Link>
    </div>    
  )
}