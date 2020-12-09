import styles from "./ProductCart.module.css";
import Link from "next/link";
import CartProduct from "./CartProduct";
import { useSelector } from 'react-redux';

export default function ProductCart() {
	const products = useSelector(state => state.cart.cartArr);
	const totalPrice = products.reduce((sum, current) => sum + current.price*current.count, 0).toFixed(2);

  return (
		<div className={styles.cartContainer}>
			<h2 className={styles.title}>Корзина</h2>
			<div className={styles.products}>
				{products.map(el => (
					<CartProduct key={el._id} product={el} />
				))}
				{!products.length && <p>Ваша корзина пока пуста...</p>}
			</div>
			<div className={styles.orderInfo}>
				<Link href="/">
					<a>
						<p className={styles.toHome}>⟵ {products.length ? "Продолжить покупки" : "Добавить товары"}</p>					
					</a>
				</Link>
				<div className={styles.priceInfo}>
					<p className={styles.total}>ИТОГО</p>
					<p className={styles.total}>{totalPrice} руб.</p>
				</div>		
			</div>
			<div className={styles.btnWrapper}>
				<button className={styles.orderBtn}>Оформить заказ</button>	
			</div>			
		</div>   
  )
}