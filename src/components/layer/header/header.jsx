import { useState } from 'react';
import { Logo, Nav } from './components';
import { HeaderMini } from './components/header-mini/header-mini';
import { Button, ControlPanel, FontSizeBanner, SearchReplacement } from '../../ui';

import styles from './header.module.css';

export const Header = ({
   isBurgerOpen,
   setIsBurgerOpen
}) => {
   const [isSearchOpen, setIsSearchOpen] = useState(false);
   const [isFontSizeActive, setIsFontSizeActive] = useState(false);
   const [isAccordionOpen, setIsAccordionOpen] = useState(false);

   const handleFontSizeToggle = () => {
      setIsFontSizeActive(!isFontSizeActive);
   }

   return (
      <>
         <HeaderMini
            isBurgerOpen={isBurgerOpen}
            setIsBurgerOpen={setIsBurgerOpen}
            isFontSizeActive={isFontSizeActive}
            handleFontSizeToggle={handleFontSizeToggle}
            isAccordionOpen={isAccordionOpen}
            setIsAccordionOpen={setIsAccordionOpen}
            className={styles.headerMiniPart}
         />
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
                  onFontSizeToggle={handleFontSizeToggle}
                  isFontSizeActive={isFontSizeActive}
               />
               <Button>Связаться с нами</Button>
            </header>
         </div >
      </>
   );
};



