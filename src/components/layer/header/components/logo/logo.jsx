import styles from './logo.module.css';
import logoUrl from '../../../../../assets/icons/logo.svg';
import { Link } from 'react-router-dom';

export const Logo = () => {
   return (
      <Link to="/" className={styles.LogoLink}>
         <img src={logoUrl} className={styles.Logo} alt="Logo" />
      </Link>
   );
};