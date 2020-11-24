
export default function Home({categories}) {
  console.log(categories)
  return (
    
    <div className={styles.wrapper}>
      {categories.length > 0 && categories.map((el) => <h1>{el.name}</h1>)}
      <header>
        ХЕАДЕР
      </header>
      <main >
        КОНТЕНТ
      </main>

      <footer>
        ФУТЕР
      </footer>
    </div>
  )
}



