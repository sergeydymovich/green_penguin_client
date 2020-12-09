import styles from "./ProductList.module.css";
import { useSelector, useDispatch } from 'react-redux';
import Pagination from "../Pagination/Pagination";
import ProductContainer from "../Product/ProductContainer";
import Loader from "../Loader/Loader";
import { getProducts, getProductsRequest, getProductsAmount} from "../../redux/productsSlice";
import { selectFilter, changeFilterWord} from "../../redux/requestSlice";
import axios from "../../utils/axios.utils";
import { useEffect, useState } from "react";
import cn from 'classnames/bind';

export default function ProductList() {
const dispatch = useDispatch();
const { productsArr, pageSize, isLoading, totalAmount } = useSelector(state => state.products);
const { category, subCategory, brands, sortBy, filterWord, activePage } = useSelector(state => state.request);
const cartArr = useSelector(state => state.cart.cartArr);
const [products, setProducts] = useState([]);

useEffect(() => {
    dispatch(getProductsRequest());
    axios.GET(`/products?category=${category}&subcategory=${subCategory}&brands=${brands}&offset=${activePage*pageSize}&sort=${sortBy}&word=${filterWord}&limit=${pageSize}`).then(res => {	
        dispatch(getProducts(res.data.products)); 
        dispatch(getProductsAmount(res.data.count))								
    }).catch(error =>  {
      console.log(error);
    });
},[category, subCategory, brands, sortBy, filterWord, activePage])

useEffect(() => {
  if (cartArr.length) {
    const upProducts = productsArr.map(el => {
      const isCartEl = cartArr.find(cartEl => el._id === cartEl._id);
      return  isCartEl ? isCartEl : el;
    })
    setProducts(upProducts)
  } else {
    setProducts(productsArr)
  }
  
},[productsArr, cartArr]);

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.filters}>
          <p
            className={cn(styles.priceFilter, {[styles.activeFilter]: sortBy === "price"})}
            onClick={() => dispatch(selectFilter("price"))}
          >
            По цене {sortBy === "price" ? `🠧` : `🠥`}
          </p>
          <p
            className={cn(styles.alphFilter, {[styles.activeFilter]: sortBy === "alphabet"})}
            onClick={() => dispatch(selectFilter("alphabet"))}
          >
            По алфавиту {sortBy === "alphabet" ? `🠧` : `🠥`}
          </p>
          <p className={styles.reset} onClick={() => dispatch(changeFilterWord(""))}>Сбросить фильтры ✖</p>
        </div>
        {isLoading &&
        <div className={styles.loaderContainer}>
          <Loader/>
        </div>				 
        }
        {!isLoading && !totalAmount && <p className={styles.noProduct}>По вашему запросу товаров не найдено...</p>}
        <div className={styles.productsContainer}>
        {!isLoading && products.map(product => (
          <ProductContainer key={product._id} product={product} />
        ))}
        </div>    
      </div>    
      <Pagination isLoading={isLoading} />
    </>
  )
}