// search-bar.jsx
import { SearchIcon, XMarkIcon } from '../../../../../assets/icons';
import styles from './search-bar.module.css';

export const SearchBar = ({ onSearchToggle, isSearchOpen }) => {
   return (
      <button
         className={styles.button}
         onClick={onSearchToggle}
         aria-label={isSearchOpen ? "Close search" : "Open search"}
      >
         {isSearchOpen ? (
            <XMarkIcon className={styles.icon} />
         ) : (
            <SearchIcon className={styles.icon} />
         )}
      </button>
   );
};