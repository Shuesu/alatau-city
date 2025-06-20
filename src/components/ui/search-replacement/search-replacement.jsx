import styles from './search-replacement.module.css'
import { SearchIcon } from '../../../assets/icons';

export const SearchReplacement = () => {
   return (
      <>
         <input
            type="text"
            placeholder="Поиск..."
            className={styles.searchInput}
            autoFocus
         />
         <SearchIcon className={styles.searchIcon} />
      </>
   );
}