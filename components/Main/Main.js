import styles from "./Main.module.css";
import Catalog from "../Catalog/Catalog";
import ProductList from "../ProductList/ProductList"

export default function Main() {

  return (
    <div className={styles.container}>
			<div className={styles.catalogContainer}>
				<Catalog />
			</div>
      <div className={styles.productsContainer}>
				<ProductList />
			</div>
			
    </div>    
    
  )
}