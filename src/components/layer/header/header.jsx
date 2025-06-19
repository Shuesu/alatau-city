import { Logo, Nav } from './components';
import { ControlPanel } from '../../ui';
import { Button } from '../../ui/button/button'
import styles from './header.module.css';

export const Header = () => {
   return (
      <div className={styles.headerContainer}>
         <header className={styles.header}>
            <Logo />
            <Nav />
            <ControlPanel />
            <Button>Связаться с нами</Button>
         </header>
      </div>
   );
};