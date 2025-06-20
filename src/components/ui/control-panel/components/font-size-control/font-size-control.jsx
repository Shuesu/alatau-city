import { EyeIcon } from '../icons/eye-icon';
import { EyeClosedIcon } from '../icons/eye-closed-icon';
import styles from './font-size-control.module.css';

export const FontSizeControl = ({ onToggle, isActive }) => {
   return (
      <button className={styles.button} onClick={onToggle}>
         {isActive ? (
            <EyeClosedIcon className={styles.icon} />
         ) : (
            <EyeIcon className={styles.icon} />
         )}
      </button>
   )
}