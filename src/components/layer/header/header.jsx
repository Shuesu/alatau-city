import { useState } from 'react';
import { Logo, Nav } from './components';
import { Button, ControlPanel, FontSizeBanner, SearchReplacement } from '../../ui';
import { FontSizeControl } from '../../ui/control-panel/components/font-size-control/font-size-control';
import { LanguageDropDown } from '../../ui/control-panel/components/language-dropdown/language-dropdown';
import styles from './header.module.css';

export const Header = () => {
   const [isSearchOpen, setIsSearchOpen] = useState(false);
   const [isFontSizeActive, setIsFontSizeActive] = useState(false);

   return (
      <>
         <div className={styles.headerContainer}>
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
                  onFontSizeToggle={() => setIsFontSizeActive(!isFontSizeActive)}
                  isFontSizeActive={isFontSizeActive}
               />
               <Button>Связаться с нами</Button>
            </header>
         </div >
         <div className={styles.headerMini}>
            <div className='styles.eyeMini'>
               {isFontSizeActive && (
                  <FontSizeBanner />
               )}
               <FontSizeControl
                  onToggle={() => setIsFontSizeActive(!isFontSizeActive)}
                  isActive={isFontSizeActive}
               />
            </div>

            <Logo />

            <LanguageDropDown />


         </div>
      </>
   );
};