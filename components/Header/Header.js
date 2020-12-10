import { useDispatch,  useSelector } from 'react-redux';
import { useState, useEffect}  from 'react';
import { changeFilterWord } from "../../redux/requestSlice";
import styles from "./Header.module.css";


export default function Header() {
const dispatch = useDispatch();
const filterWord = useSelector(state => state.request.filterWord)
const [word, setWord] = useState("");

const addFilterWord = () => {
  if (word) dispatch(changeFilterWord(word));
}

const clearFilterWord = () => {
  setWord("");
  if (filterWord) dispatch(changeFilterWord(""));
  
}

useEffect(() => {
  setWord(filterWord);
},[filterWord])

  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <h1 className={styles.name}>GREEN PENGUIN</h1>
        <h2 className={styles.description}>магазин натуральных продуктов</h2>
      </div>
      <div className={styles.searchContainer}>
        <input
          className={styles.search}
          type="text"
          placeholder="Поиск..."
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />
      {word &&
      <div className={styles.crossContainer}>
        <img
          src="/cross.svg"
          className={styles.crossIcon}
          alt="cross"
          onClick={clearFilterWord}
          />
      </div>
      }  
      <div className={styles.iconContainer}>
        <img
          src="/search.svg"
          className={styles.searchIcon}
          alt="search-icon"
          onClick={addFilterWord}
        />
      </div>     
      </div>
      <div className={styles.phoneContainer}>
        <p className={styles.phone}>+ 375 (33) 881-76-55</p>
        <p className={styles.call}>Заказать звонок</p>
      </div>      
    </div>       
  )
}
