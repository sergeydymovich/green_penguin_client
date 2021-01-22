import styles from "./ProductCart.module.css";
import { useDispatch } from "react-redux";
import {
  incrementProduct,
  decrementProduct,
  removeProduct,
} from "../../redux/cartSlice";

export default function CartItem({ product }) {
  const { image, name, price, _id, count } = product;
  const dispatch = useDispatch();

  return (
    <div className={styles.cartProduct}>
      <div className={styles.imageWrapper}>
        <img className={styles.image} src={image} />
      </div>
      <div className={styles.info}>
        <p className={styles.name}>{name}</p>
        <p className={styles.price}>{price} руб/шт</p>
      </div>
      <div className={styles.counterWrapper}>
        <div className={styles.counter}>
          <button
            className={styles.counterBtn}
            onClick={() => dispatch(decrementProduct(_id))}
          >
            -
          </button>
          <p className={styles.count}>{count}</p>
          <button
            className={styles.counterBtn}
            onClick={() => dispatch(incrementProduct(_id))}
          >
            +
          </button>
        </div>
        <p className={styles.total}>{(price * count).toFixed(2)}</p>
        <img
          src="/cross_red.svg"
          className={styles.crossIcon}
          alt="cross"
          onClick={() => dispatch(removeProduct(_id))}
        />
      </div>
    </div>
  );
}
