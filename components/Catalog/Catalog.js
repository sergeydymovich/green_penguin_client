import { useEffect, useState } from "react";
import styles from "./Catalog.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCategory,
  selectSubCategory,
  selectBrand,
} from "../../redux/requestSlice";
import cn from "classnames/bind";

export default function Catalog() {
  const dispatch = useDispatch();
  const categoriesArr = useSelector((state) => state.categories.categoriesArr);
  const { category, subCategory, brands } = useSelector(
    (state) => state.request
  );
  const [activeCategory, setActiveCategory] = useState({});

  const changeSubCategory = (e, sub) => {
    e.stopPropagation();
    dispatch(selectSubCategory(sub));
  };

  useEffect(() => {
    setActiveCategory(categoriesArr.find((el) => el.name === category));
  }, [category]);

  return (
    <div className={styles.catalog}>
      <h3 className={styles.title}>Каталог</h3>
      <ul className={styles.list}>
        {categoriesArr.map((el) => (
          <li
            onClick={() => dispatch(selectCategory(el.name))}
            key={el._id}
            className={styles.item}
          >
            <p
              className={cn(styles.itemText, {
                [styles.active]: category === el.name,
              })}
            >
              {el.name}
            </p>
            {category === el.name && (
              <ul className={styles.subList}>
                {activeCategory?.subcategories?.map((sub) => (
                  <li
                    key={el._id + sub._id}
                    className={cn(styles.subItem, {
                      [styles.activeSub]: subCategory === sub.name,
                    })}
                    onClick={(e) => changeSubCategory(e, sub.name)}
                  >
                    <p className={styles.subText}>{sub.name}</p>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      {category && activeCategory?.brands && (
        <ul className={cn(styles.list, styles.brands)}>
          {activeCategory.brands.map((brand) => (
            <li
              key={brand._id}
              className={cn(styles.item, styles.brandItem, {
                [styles.active]: brands.find((el) => el === brand.name),
              })}
            >
              <div
                onClick={() => dispatch(selectBrand(brand.name))}
                className={cn(styles.checkBox, {
                  [styles.activeBrand]: brands.find((el) => el === brand.name),
                })}
              >
                {brands.find((el) => el === brand.name) && (
                  <img className={styles.ok} src="./ok.svg" />
                )}
              </div>
              <p>{brand.name}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
