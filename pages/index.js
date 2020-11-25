import Header from "../components/Header/Header";
import Navigation from "../components/Navigation/Navigation";
import { useDispatch } from 'react-redux';
import axios from "../utils/axios.utils";
import { getCategories } from "../redux/actions/categories.actions";
import { useEffect } from "react";

export default function Home({categories}) {
const dispatch = useDispatch();


useEffect(() => {
  dispatch(getCategories(categories));
},[]);
  return (
    
    <div className="app" >
      <Header />
      <Navigation />
    </div>
  )
}

Home.getInitialProps = async  () => {

const categories = await axios.GET("/categories").then(res => {	
  return res.data.categories;				
}).catch(error =>  {
  console.log(error);
});

  return { categories }
}

