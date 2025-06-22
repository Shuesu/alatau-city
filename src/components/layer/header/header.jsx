import { useState } from 'react';
import { Logo, Nav } from './components';
import { Button, ControlPanel, FontSizeBanner, SearchReplacement } from '../../ui';
import { FontSizeControl } from '../../ui/control-panel/components/font-size-control/font-size-control';
import { LanguageDropDown } from '../../ui/control-panel/components/language-dropdown/language-dropdown';
import { XMarkIcon, Burger, ArrowDownIcon } from '../../../assets/icons';


import styles from './header.module.css';

export const Header = () => {
   const [isSearchOpen, setIsSearchOpen] = useState(false);
   const [isFontSizeActive, setIsFontSizeActive] = useState(false);
   const [isBurgerOpen, setIsBurgerOpen] = useState(false);
   const [isAccordionOpen, setIsAccordionOpen] = useState(false);

   const handleFontSizeToggle = () => {
      setIsFontSizeActive(!isFontSizeActive);
   }


   return (

      <div className={`${styles.headerMini} ${isBurgerOpen ? styles.greyHat : ''}`}>
         {isFontSizeActive && <FontSizeBanner />}
         <div className={styles.miniHat}>
            <div className={styles.eyeMini}>
               <FontSizeControl
                  onToggle={handleFontSizeToggle}
                  isActive={isFontSizeActive}
               />
            </div>
            <Logo className={styles.logo} />
            <div className={styles.hatControl}>
               <LanguageDropDown />
               <button className={styles.burgerBtn} onClick={() => setIsBurgerOpen(!isBurgerOpen)}>
                  {isBurgerOpen ? <XMarkIcon className={`${styles.xIcon} ${styles.miniIcon}`} /> : <Burger className={styles.miniIcon} />}
               </button>
            </div>
         </div>


         {isBurgerOpen && (
            <div className={styles.fullscreenMenu}>
               <SearchReplacement />

               <div className={styles.accordion}>
                  <div
                     className={styles.accordionHeader}
                     onClick={() => setIsAccordionOpen(!isAccordionOpen)}
                  >
                     <span className={styles.accordionTitle}>Об Алатау</span>
                     <span className={isAccordionOpen ? styles.rotate : ''}><ArrowDownIcon className={styles.hatIcon} /></span>
                  </div>

                  {isAccordionOpen && (
                     <div className={styles.accordionContent}>
                        <p>О городе Алатау</p>
                        <p>Районы города</p>
                        <p>Цифры и факты</p>
                        <p>Инфраструктура</p>
                        <p>Логистика</p>
                     </div>
                  )}
               </div>

               <Nav />

               <Button className={styles.button}>Связаться с нами</Button>
            </div>
         )}
      </div>
   );
};



{/* <div className={styles.headerContainer}>
            {isFontSizeActive && (
               <FontSizeBanner />
            )}
            <header className={styles.header}>

               <Logo />
               <div className={isSearchOpen ? styles.searchReplacement : styles.navContainer}>
                  {isSearchOpen ? (
                     <SearchReplacement />
                  ) : (
                     <Nav />
                  )}
               </div>

               <ControlPanel
                  onSearchToggle={() => setIsSearchOpen(!isSearchOpen)}
                  isSearchOpen={isSearchOpen}
                  onFontSizeToggle={handleFontSizeToggle}
                  isFontSizeActive={isFontSizeActive}
               />
               <Button>Связаться с нами</Button>
            </header>
         </div > */}