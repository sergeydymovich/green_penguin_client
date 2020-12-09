import Header from "../components/Header/Header";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
import ProductCart from "../components/ProductCart/ProductCart";
import Head from "next/head";

function Cart() {

  return (
    <div className="app" >
      <Head>
        <title>Cart</title>
      </Head>
      <Header />
      <Navigation />
      <ProductCart />
      <Footer />
    </div>
  )
}


export default Cart;