import styles from "./Navigation.module.css";
import { useDispatch } from 'react-redux';
import { getCategories } from '../../redux/actions/categories.actions';

export default function Navigation() {
  const dispatch = useDispatch();

  return (
    <div className={styles.navigation} >
    </div>    
    
  )
}