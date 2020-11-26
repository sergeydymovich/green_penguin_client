import Header from "../components/Header/Header";
import Navigation from "../components/Navigation/Navigation";
import Main from "../components/Main/Main";
import { useDispatch } from 'react-redux';
import axios from "../utils/axios.utils";
import { getCategories } from "../redux/actions/categories.actions";
import { useEffect } from "react";

export default function Home({categObj, products}) {
const dispatch = useDispatch();
console.log(products)
useEffect(() => {
  const {categories, brands} = categObj;

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
  console.log(res.data)
  return res.data;				
}).catch(error =>  {
  console.log(error);
});

const products = await axios.GET(`/products?limit=9`).then(res => {	
  return res.data.products	
}).catch(error =>  {
  console.log(error);
});

  return { categObj, products }
}

