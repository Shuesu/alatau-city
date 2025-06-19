
import styles from './button.module.css';

export const Button = ({ children, onClick, type = 'button', disabled = false }) => {
   return (
      <button
         className={styles.button}
         onClick={onClick}
         type={type}
         disabled={disabled}
      >
         {children}
      </button>
   );
};