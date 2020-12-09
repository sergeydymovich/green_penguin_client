import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { changeActivePage } from "../../redux/requestSlice";
import styles from "./Pagination.module.css";
import cn from "classnames/bind";

function Pagination({ isLoading }) {
const dispatch = useDispatch();
const pages = useSelector(state => state.products.pages);	
const activePage = useSelector(state => state.request.activePage);

const handleClick = (index) => {
		dispatch(changeActivePage(index));
	}

  return (
		<div className={styles.pagination}>	
				{pages > 1 && 
				<button
					disabled={!activePage || isLoading}
					className={styles.prev}
					onClick={() => handleClick(activePage - 1)}
				>
				Предыдущая
				</button>
				}

				{activePage > 1 &&
				<>
					<button
						onClick={() => handleClick(0)}
						className={styles.btn}
						disabled={isLoading}
					>
					1
					</button>
					{activePage > 2 && <>...</>}
				</>
				}

				{activePage > 0 && 
					<button
					onClick={() => handleClick(activePage - 1)}
					className={styles.btn}
					disabled={isLoading}
				 >
				{activePage}
				</button>
				}	
		
				<button
					className={ cn(styles.btn, styles.activeBtn)}
					disabled={isLoading}
				>
				{activePage + 1}
				</button>

				{activePage < pages - 1 &&
				<>	
					<button
						onClick={() => handleClick(activePage + 1)}
						className={styles.btn}
						disabled={isLoading}
					>			
					{activePage + 2}
					</button>
					{activePage !== pages - 2 &&
						<>
							{activePage < pages - 3 && <>...</>}
							<button
								onClick={() => handleClick(pages - 1)}
								className={styles.btn}
								disabled={isLoading}
							>
							{pages}
							</button>
						</>
					}
				</>	
				}

				{pages > 1 && 
				<button
					disabled={(activePage === pages - 1) || !pages || isLoading}
					className={styles.next}
					onClick={() => handleClick(activePage + 1)}
				>
				Следующая		 
				</button>
				}						
				
		</div>
  );
	}

export default Pagination;