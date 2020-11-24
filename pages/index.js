import axios from "../utils/axios.utils";
import Header from "../components/Header/Header";

export default function Home({categories}) {


  return (
    
    <div className="app" >
      <Header />
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

