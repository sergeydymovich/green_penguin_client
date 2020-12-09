import { useEffect, useState }  from 'react';
import styles from "./Catalog.module.css";
import { useSelector, useDispatch } from 'react-redux';
import { selectCategory, selectSubCategory, selectBrand } from "../../redux/requestSlice";
import cn from 'classnames/bind';


export default function Catalog() {
	const dispatch = useDispatch();
	const categoriesArr = useSelector(state => state.categories.categoriesArr);
	const {category, subCategory, brands} = useSelector(state => state.request);
	const [activeCategory, setActiveCategory] = useState({});

	const changeSubCategory = (e,sub) => {
		e.stopPropagation();
		dispatch(selectSubCategory(sub))
	}
 console.log("RENDER")
	useEffect(() => {
		setActiveCategory(categoriesArr.find(el => el.name === category));
	},[category])

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
					<p className={cn(styles.itemText, {[styles.active]: category === el.name})}>{el.name}</p>
					{category === el.name && 
					<ul className={styles.subList}>
						{activeCategory?.subcategories?.map(sub => (
							<li
								key={el._id + sub}
								className={cn(styles.subItem, {[styles.activeSub]: subCategory === sub})}
								onClick={(e) => changeSubCategory(e,sub)}
							>
								<p className={styles.subText}>{sub}</p>
							</li>
						))}
					</ul>
					}
					</li>
        ))}
      </ul>
			{category && activeCategory?.brands &&
			<ul className={cn(styles.list, styles.brands)}>
				 {activeCategory.brands.map(brand => (
					<li key={brand} className={cn(styles.item, styles.brandItem, {[styles.active]: brands.find(el => el === brand)})}>
						<div
							onClick={() => dispatch(selectBrand(brand))}
							className={cn(styles.checkBox, {[styles.activeBrand]: brands.find(el => el === brand)})}
						>
						{brands.find(el => el === brand) && <img className={styles.ok} src="./ok.svg" />}
						</div>
						<p>{brand}</p>
					</li>
				))}
			</ul>}
    </div>    
    
  )
}

