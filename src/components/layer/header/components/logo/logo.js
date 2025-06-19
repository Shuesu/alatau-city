import styles from './logo.module.css';
import logoUrl from '../../../../../assets/icons/logo.svg';
import { Link } from 'react-router-dom';

export const Logo = () => {
   return (
      <Link to="/" className={styles.Logo}>
         <img src={logoUrl} alt="Logo" />
      </Link>
   );
};