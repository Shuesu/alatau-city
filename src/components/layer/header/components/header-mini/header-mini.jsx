import { FontSizeControl } from '../../../../ui/control-panel/components/font-size-control/font-size-control';
import { LanguageDropDown } from '../../../../ui/control-panel/components/language-dropdown/language-dropdown';
import { XMarkIcon, Burger, ArrowDownIcon } from '../../../../../assets/icons';
import { Button, FontSizeBanner, SearchReplacement, SocialBar } from '../../../../ui';
import { Logo } from '../../components/logo/logo';
import { Nav } from '../../components/nav/nav';

import styles from './header-mini.module.css';

export const HeaderMini = ({
   isBurgerOpen,
   setIsBurgerOpen,
   isFontSizeActive,
   handleFontSizeToggle,
   isAccordionOpen,
   setIsAccordionOpen,
   className = '',
}) => {
   return (
      <div className={`${styles.headerMini} ${className} ${isBurgerOpen ? styles.greyHat : ''}`}>
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
               <SocialBar className={styles.socialBar} />
               <Button className={styles.button}>Связаться с нами</Button>
            </div>
         )}
      </div>
   );
};