import { Logo, Nav } from './components';
import styles from './header.module.css';

export const Header = () => {
   return (
      <header className={styles.header}>
         <Logo />
         <Nav />
         <HeaderControls />
         <button></button>
      </header>
   );
};