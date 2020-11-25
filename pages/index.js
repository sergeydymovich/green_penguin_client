import Header from "../components/Header/Header";
import Navigation from "../components/Navigation/Navigation";
import axios from "../utils/axios.utils";

export default function Home({categories}) {

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

