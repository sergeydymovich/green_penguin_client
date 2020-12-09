import Header from "../components/Header/Header";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
import Content from "../components/Content/Content"
import axios from "../utils/axios.utils";
import { getCategories } from "../redux/categoriesSlice";
import { getProducts, getProductsAmount } from "../redux/productsSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import Head from "next/head";

 function Home({categoriesObj, productsObj}) {
  const dispatch = useDispatch();
  const productsArr = useSelector(state => state.products.productsArr);
  const keywords = categoriesObj.categories.map(category => category.subcategories.map(sub => category.name + " " + sub));
  const brands = categoriesObj.categories.map(category => category.brands.map(brand => brand))

  useEffect(() => {  
    const { products, count } = productsObj;

    if (!productsArr.length) {
      dispatch(getProducts(products));
      dispatch(getProductsAmount(count));
      dispatch(getCategories(categoriesObj));
    }       
  },[]);

  return (  
    <div className="app" >
      <Head>
        <title>Green Penguin</title>
        <meta name="name" content="green penguin" />
        <meta name="description" content="магазин натуральных продуктов"/>
        <meta name="keywords" content={keywords} />
        <meta name="brands" content={brands} />
      </Head>
      <Header />
      <Navigation />
      <Content />
      <Footer />
    </div>
  )
}

export async function getServerSideProps() {

  const categoriesObj = await axios.GET("/categories").then(res => {	
    return res.data;				
  }).catch(error =>  {
    console.log(error);
  });

  const productsObj = await axios.GET(`/products?limit=12`).then(res => {	
    return res.data	
  }).catch(err =>  {
    console.log(err);
  });

  return {
    props: {categoriesObj, productsObj}
  }
}

export default Home;