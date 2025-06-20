import { useState } from 'react';
import { ArrowDownIcon } from '../../../../../assets/icons/arrow-down-icon';
import styles from './language-dropdown.module.css'

export const LanguageDropDown = () => {
   const [isLanguageOpen, setIsLanguageOpen] = useState(false);
   const [currentLanguage, setCurrentLanguage] = useState('ru');

   const openLanguageMenu = () => {
      setIsLanguageOpen(true);
   };

   const closeLanguageMenu = () => {
      setIsLanguageOpen(false);
   };

   const selectLanguage = (lang) => {
      setCurrentLanguage(lang);
      setIsLanguageOpen(false);
   };

   const availableLanguages = ['ru', 'kz', 'en'].filter(lang => lang !== currentLanguage);
   return (
      <div
         className={styles.languageDropdown}
         onMouseEnter={openLanguageMenu}
         onMouseLeave={closeLanguageMenu}
      >
         <button
            className={`${styles.languageButton} ${isLanguageOpen ? styles.active : ''}`}
         >
            {currentLanguage.toUpperCase()}
            <ArrowDownIcon
               className={`${styles.arrow} ${isLanguageOpen ? styles.rotated : ''}`}
            />
         </button>

         {isLanguageOpen && (
            <div className={styles.languageOptions}>
               {availableLanguages.map((lang) => (
                  <button
                     key={lang}
                     className={styles.languageOption}
                     onClick={() => selectLanguage(lang)}
                  >
                     {lang.toUpperCase()}
                  </button>
               ))}
            </div>
         )}
      </div>
   );
}