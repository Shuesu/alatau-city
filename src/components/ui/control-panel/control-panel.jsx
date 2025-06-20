import { SearchBar, FontSizeControl, LanguageDropDown } from './components';
import styles from './control-panel.module.css';

export const ControlPanel = ({ onSearchToggle, isSearchOpen, onFontSizeToggle, isFontSizeActive }) => {
   return (
      <div className={styles.headerControl}>
         <SearchBar
            onSearchToggle={onSearchToggle}
            isSearchOpen={isSearchOpen}
         />
         <FontSizeControl
            onToggle={onFontSizeToggle}
            isActive={isFontSizeActive}
         />
         <LanguageDropDown />
      </div>
   );
};