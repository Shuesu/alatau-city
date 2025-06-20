import { SearchIcon } from '../../../../../assets/icons/search-icon';
import { XMarkIcon } from '../../../../../assets/icons'
import styles from './search-bar.module.css';

export const SearchBar = () => {
   return (
      <button className={styles.button}>
         <SearchIcon className={styles.icon} />
      </button>
   )
}