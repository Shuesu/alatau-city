import { EyeIcon } from '../icons/eye-icon';
import styles from './font-size-control.module.css';

export const FontSizeControl = () => {
   return (
      <button className={styles.button}>
         <EyeIcon className={styles.icon} />
      </button>
   )
}