import styles from "./ProductList.module.css";
import { useSelector, useDispatch } from "react-redux";
import Pagination from "../Pagination/Pagination";
import Product from "../Product/Product";
import Loader from "../Loader/Loader";
import Filters from "../Filters/Filters";
import { productsDataRequest } from "../../redux/productsSlice";
import { useEffect } from "react";

export default function ProductList() {
  const dispatch = useDispatch();
  const { productsArr, pageSize, isLoading, totalAmount } = useSelector(
    (state) => state.products
  );
  const {
    category,
    subCategory,
    brands,
    sortBy,
    sortOrder,
    filterWord,
    activePage,
  } = useSelector((state) => state.request);
  const cartArr = useSelector((state) => state.cart.cartArr);

  useEffect(() => {
    dispatch(
      productsDataRequest(
        `/products?category=${category}&subcategory=${subCategory}&brands=${brands}&offset=${
          activePage * pageSize
        }&sort=${sortBy}&sortorder=${sortOrder}&filterword=${filterWord}&limit=${pageSize}`
      )
    );
  }, [
    category,
    subCategory,
    brands,
    sortBy,
    sortOrder,
    filterWord,
    activePage,
  ]);

  return (
    <>
      <div className={styles.wrapper}>
        <Filters />
        {isLoading && (
          <div className={styles.loaderContainer}>
            <Loader />
          </div>
        )}
        {!isLoading && !totalAmount && (
          <p className={styles.noProduct}>
            По вашему запросу товаров не найдено...
          </p>
        )}
        <div className={styles.productsContainer}>
          {!isLoading &&
            productsArr.map((product) => {
              const cartItem = cartArr.find(
                (cartEl) => product._id === cartEl._id
              );
              return (
                <Product key={product._id} product={cartItem || product} />
              );
            })}
        </div>
      </div>
      <Pagination isLoading={isLoading} />
    </>
  );
}
