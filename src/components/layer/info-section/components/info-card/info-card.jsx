import { ArrowIcon, RectangleIcon, HexIcon, TriangleIcon } from '../../../../../assets/icons';
import styles from './info-card.module.css';

export const InfoCard = ({ title, description, icon, color }) => {
   const getIcon = () => {
      switch (icon) {
         case 'rectangle': return <RectangleIcon className={styles.icon} />;
         case 'hex': return <HexIcon className={styles.icon} />;
         case 'triangle': return <TriangleIcon className={styles.icon} />;
         default: return null;
      }
   };

   return (
      <div className={styles.infoCard} style={{ backgroundColor: color }}>
         <div className={styles.iconWrapper}>{getIcon()}</div>
         <div className={styles.content}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
         </div>
         <ArrowIcon className={styles.arrow} />
      </div>
   );
};
