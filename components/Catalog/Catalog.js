import styles from "./Catalog.module.css";
import { useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import cn from 'classnames/bind';

export default function Catalog() {
	const categories = useSelector(state => state.categories.categoriesArr);
	const brandsState = useSelector(state => state.categories.brandsArr);
	const [brands, setBrands] = useState([]);
	const [activeCategory, setActiveCategory] = useState(undefined);

	const selectBrand = (id) => {
		const upBrands = brands.map(el => (
			el._id === id ? {...el, isSelected: el.isSelected ? false : true } : el
		))
		setBrands(upBrands);
	}

	useEffect(() => {
		setBrands(brandsState)
	},[brandsState])

  return (
    <div className={styles.catalog}>
      <ul className={styles.list}>
        {categories.map((el) => (
					<li
						onClick={() => setActiveCategory(el)}
						key={el._id}
						className={styles.item}
					>
					<p className={cn(styles.itemText, {[styles.active]: activeCategory?.name === el.name})}>{el.name}</p>
					{activeCategory && activeCategory.subcategories.length > 0 && activeCategory.name === el.name && 
						<ul className={styles.subList}>
							{activeCategory.subcategories.map(sub => (
								<li className={styles.subItem}>
									<p className={styles.subText}>{sub}</p>
								</li>
							))}
						</ul>
					}
					</li>
        ))}
      </ul>
			<ul className={styles.list}>
				{brands.map(brand => (
					<li className={cn(styles.item, styles.brandItem, {[styles.active]: brand.isSelected})}>
						<div onClick={() => selectBrand(brand._id)} className={cn(styles.checkBox,  {[styles.activeBrand]: brand.isSelected})}>
							{brand.isSelected && <img className={styles.ok} src="./ok.svg" />}
						</div>
						<p>{brand.name}</p>
					</li>
				))}
			</ul>
    </div>    
    
  )
}

