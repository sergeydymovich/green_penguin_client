import ProductCart from "../components/ProductCart/ProductCart";
import Head from "next/head";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../redux/categoriesSlice";
import axios from "../utils/axios.utils";

function Cart() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categoriesArr);

  useEffect(() => {
    if (!categories.length) {
      axios
        .GET("/categories")
        .then((res) => {
          console.log(res.data.categories);
          dispatch(getCategories(res.data.categories));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  return (
    <>
      <Head>
        <title>Cart</title>
      </Head>
      <ProductCart />
    </>
  );
}

export default Cart;
