import { SearchBar, LanguageDropDown, FontSizeControl } from './components';
import styles from './control-panel.module.css';

export const ControlPanel = () => {

   return (
      <div className={styles.headerControl}>
         <SearchBar />
         <FontSizeControl />
         <LanguageDropDown />
      </div>
   );
};