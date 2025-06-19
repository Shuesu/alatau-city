import { useState } from 'react';
import styles from './header-control.module.css';

export const HeaderControl = () => {
   const [isLanguageOpen, setIsLanguageOpen] = useState(false);
   const [currentLanguage, setCurrentLanguage] = useState('ru');

   const toggleLanguage = () => {
      setIsLanguageOpen(!isLanguageOpen);
   };

   const selectLanguage = (lang) => {
      setCurrentLanguage(lang);
      setIsLanguageOpen(false);
   };

   const availableLanguages = ['ru', 'kz', 'eng'].filter(lang => lang !== currentLanguage);

   return (
      <div className={styles.headerControl}>
         <button className={styles.button}>
            <svg width="21" height="21" viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg">
               <path
                  d="M9 0C13.968 0 18 4.032 18 9C18 13.968 13.968 18 9 18C4.032 18 0 13.968 0 9C0 4.032 4.032 0 9 0ZM9 16C12.8675 16 16 12.8675 16 9C16 5.1325 12.8675 2 9 2C5.1325 2 2 5.1325 2 9C2 12.8675 5.1325 16 9 16ZM17.4853 16.0711L20.3137 18.8995L18.8995 20.3137L16.0711 17.4853L17.4853 16.0711Z"
                  className={styles.icon}
               />
            </svg>
         </button>

         <button className={styles.button}>
            <svg width="22" height="18" viewBox="0 0 22 18" xmlns="http://www.w3.org/2000/svg">
               <path
                  d="M11.0003 0C16.3924 0 20.8784 3.87976 21.8189 9C20.8784 14.1202 16.3924 18 11.0003 18C5.60812 18 1.12215 14.1202 0.181641 9C1.12215 3.87976 5.60812 0 11.0003 0ZM11.0003 16C15.2359 16 18.8603 13.052 19.7777 9C18.8603 4.94803 15.2359 2 11.0003 2C6.7646 2 3.14022 4.94803 2.22278 9C3.14022 13.052 6.7646 16 11.0003 16ZM11.0003 13.5C8.51498 13.5 6.50026 11.4853 6.50026 9C6.50026 6.51472 8.51498 4.5 11.0003 4.5C13.4855 4.5 15.5003 6.51472 15.5003 9C15.5003 11.4853 13.4855 13.5 11.0003 13.5ZM11.0003 11.5C12.381 11.5 13.5003 10.3807 13.5003 9C13.5003 7.6193 12.381 6.5 11.0003 6.5C9.6196 6.5 8.50026 7.6193 8.50026 9C8.50026 10.3807 9.6196 11.5 11.0003 11.5Z"
                  className={styles.icon}
               />
            </svg>
         </button>


         <div className={styles.languageDropdown}>
            <button
               className={`${styles.languageButton} ${isLanguageOpen ? styles.active : ''}`}
               onClick={toggleLanguage}
            >
               {currentLanguage.toUpperCase()}
               <svg
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  className={`${styles.arrow} ${isLanguageOpen ? styles.rotated : ''}`}
               >
                  <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" />
               </svg>
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
      </div>
   );
};