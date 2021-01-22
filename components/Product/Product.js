import React from "react";
import styles from "./Product.module.css";
import { useDispatch } from "react-redux";
import {
  addProduct,
  removeProduct,
  incrementProduct,
  decrementProduct,
} from "../../redux/cartSlice";
import cn from "classnames/bind";

function Product({ product }) {
  const { image, name, price, weight, volume, _id, count } = product;
  const dispatch = useDispatch();

  return (
    <div className={cn(styles.productContainer, { [styles.active]: count })}>
      <div className={styles.imageWrapper}>
        <img className={styles.image} src={image} />
      </div>
      <p className={styles.name}>{name}</p>
      <div className={styles.info}>
        <p className={styles.price}>{price} руб/шт</p>
        {product.weight && <p className={styles.size}>{weight} гр</p>}
        {product.volume && <p className={styles.size}>{volume} мл</p>}
      </div>
      <div className={styles.productFooter}>
        {count && (
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
        )}
        <button
          className={styles.basketBtn}
          onClick={() =>
            dispatch(count ? removeProduct(product._id) : addProduct(product))
          }
        >
          {count ? "в корзине" : "в корзину"}
        </button>
      </div>
    </div>
  );
}

export default React.memo(Product);
