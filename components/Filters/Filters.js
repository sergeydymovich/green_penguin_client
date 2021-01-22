import styles from "./Filters.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  changeSortBy,
  changeSortOrder,
  changeFilterWord,
  resetFilters,
} from "../../redux/requestSlice";
import cn from "classnames/bind";

export default function ProductList() {
  const dispatch = useDispatch();
  const { sortBy, sortOrder } = useSelector((state) => state.request);

  const selectFilter = (sortName) => {
    if (sortBy === sortName) {
      dispatch(changeSortOrder(sortOrder === "up" ? "down" : "up"));
    } else {
      dispatch(changeSortBy(sortName));
      dispatch(changeSortOrder("down"));
    }
  };

  return (
    <div className={styles.filters}>
      <p
        className={cn(styles.filter, {
          [styles.activeFilter]: sortBy === "price",
        })}
        onClick={() => selectFilter("price")}
      >
        По цене {sortBy === "price" && sortOrder === "down" ? `↓` : `↑`}
      </p>
      <p
        className={cn(styles.filter, {
          [styles.activeFilter]: sortBy === "alphabet",
        })}
        onClick={() => selectFilter("alphabet")}
      >
        По алфавиту {sortBy === "alphabet" && sortOrder === "down" ? `↓` : `↑`}
      </p>
      <p className={styles.filter} onClick={() => dispatch(resetFilters())}>
        Сбросить фильтры ✖
      </p>
    </div>
  );
}
