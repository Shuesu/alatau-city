import { Logo, Nav } from './components';
import { ControlPanel } from '../../ui';
import { Button } from '../../ui/button/button';
import styles from './header.module.css';
import { useState } from 'react';
import { SearchIcon } from '../../../assets/icons/search-icon';

export const Header = () => {
   const [isSearchOpen, setIsSearchOpen] = useState(false);

   return (
      <div className={styles.headerContainer}>
         <header className={styles.header}>
            <Logo />
            <div className={isSearchOpen ? styles.searchReplacement : styles.navContainer}>
               {isSearchOpen ? (
                  <>
                     <input
                        type="text"
                        placeholder="Поиск..."
                        className={styles.searchInput}
                        autoFocus
                     />
                     <SearchIcon className={styles.searchIcon} />
                  </>
               ) : (
                  <Nav />
               )}
            </div>

            <ControlPanel
               onSearchToggle={() => setIsSearchOpen(!isSearchOpen)}
               isSearchOpen={isSearchOpen}
            />
            <Button>Связаться с нами</Button>
         </header>
      </div>
   );
};