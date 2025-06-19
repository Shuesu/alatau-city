import { SearchIcon, EyeIcon } from './components/icons';
import { LanguageDropDown } from './components/language-dropdown/language-dropdown';
import styles from './control-panel.module.css';

export const ControlPanel = () => {

   return (
      <div className={styles.headerControl}>
         <button className={styles.button}>
            <SearchIcon className={styles.icon} />
         </button>
         <button className={styles.button}>
            <EyeIcon className={styles.icon} />
         </button>
         <LanguageDropDown />
      </div>
   );
};