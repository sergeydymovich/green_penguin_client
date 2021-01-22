import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
function Layout({ children }) {
  return (
    <div className="app">
      <Header />
      <Navigation />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
