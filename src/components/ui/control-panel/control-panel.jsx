import { SearchBar, FontSizeControl, LanguageDropDown } from './components';
import styles from './control-panel.module.css';

export const ControlPanel = ({ onSearchToggle, isSearchOpen }) => {
   return (
      <div className={styles.headerControl}>
         <SearchBar
            onSearchToggle={onSearchToggle}
            isSearchOpen={isSearchOpen}
         />
         <FontSizeControl />
         <LanguageDropDown />
      </div>
   );
};