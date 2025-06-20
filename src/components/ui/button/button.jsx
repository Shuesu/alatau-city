
import styles from './button.module.css';

export const Button = ({
   children,
   onClick,
   type = 'button',
   disabled = false,
   className = '', // новый проп
}) => {
   return (
      <button
         className={`${styles.button} ${className}`}
         onClick={onClick}
         type={type}
         disabled={disabled}
      >
         {children}
      </button>
   );
};
