import styles from "./Header.module.css";

export default function Header() {

  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <h1 className={styles.name}>GREEN PENGUIN</h1>
        <h2 className={styles.description}>магазин натуральных продуктов</h2>
      </div>
      <div className={styles.searchContainer}>
        <input className={styles.search} type="text" placeholder="Поиск..." />
        <div className={styles.iconContainer}>
          <img src="/search.svg" className={styles.searchIcon} alt="search-icon" />
        </div>     
      </div>
      <div className={styles.phoneContainer}>
        <p className={styles.phone}>+ 375 (33) 881-76-55</p>
        <p className={styles.call}>Заказать звонок</p>
      </div>
      
    </div>    
    
  )
}
