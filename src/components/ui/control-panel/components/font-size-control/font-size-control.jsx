import { EyeIcon } from '../icons/eye-icon';
import { EyeClosedIcon } from '../icons/eye-closed-icon';
import styles from './font-size-control.module.css';

export const FontSizeControl = () => {
   return (
      <button className={styles.button}>
         <EyeClosedIcon className={styles.icon} />
      </button>
   )
}