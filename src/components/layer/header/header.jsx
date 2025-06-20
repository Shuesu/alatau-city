import { useState } from 'react';
import { Logo, Nav } from './components';
import { Button, ControlPanel, FontSizeBanner, SearchReplacement } from '../../ui';
import styles from './header.module.css';

export const Header = () => {
   const [isSearchOpen, setIsSearchOpen] = useState(false);
   const [isFontSizeActive, setIsFontSizeActive] = useState(false);

   return (
      <>
         {/* {isFontSizeActive && (
            <FontSizeBanner />
         )} */}
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
         </div>
      </>
   );
};