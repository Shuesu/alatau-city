import { Logo, Nav, HeaderControl } from './components';
import { Button } from '../../ui/button/button'
import styles from './header.module.css';

export const Header = () => {
   return (
      <div className={styles.headerContainer}>
         <header className={`${styles.header} ${styles.header2}`}>
            <Logo />
            <Nav />
            <HeaderControl />
            <Button>Связаться с нами</Button>
         </header>
      </div>
   );
};