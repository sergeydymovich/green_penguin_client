import Header from "../components/Header/Header";
import Navigation from "../components/Navigation/Navigation";
import Main from "../components/Main/Main";
import { useDispatch } from 'react-redux';
import axios from "../utils/axios.utils";
import { getCategories } from "../redux/actions/categories.actions";
import { getProducts, productsAmount } from "../redux/actions/products.actions";
import { useEffect } from "react";

export default function Home({categObj, productsObj}) {
const dispatch = useDispatch();
useEffect(() => {
  const {categories, brands} = categObj;
  const {products, count} = productsObj;

  dispatch(getProducts(products));
  dispatch(productsAmount(count));
  dispatch(getCategories(categories, brands));
},[]);
  return (
    
    <div className="app" >
      <Header />
      <Navigation />
      <Main />
    </div>
  )
}

Home.getInitialProps = async  () => {

const categObj = await axios.GET("/categories").then(res => {	
  return res.data;				
}).catch(error =>  {
  console.log(error);
});

const productsObj = await axios.GET(`/products?limit=12`).then(res => {	
  return res.data	
}).catch(err =>  {
  console.log(err);
});

  return { categObj, productsObj }
}

