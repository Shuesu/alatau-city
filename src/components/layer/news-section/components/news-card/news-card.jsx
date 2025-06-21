import { ArrowIcon } from '../../../../../assets/icons';
import styles from './news-card.module.css';

export const NewsCard = ({ title, date, image, category }) => {
   return (
      <div className={styles.newsCard}>
         <div className={styles.newsImageContainer}>
            <img src={image} alt={title} className={styles.newsImage} />
            <div className={styles.newsCategory}>{category}</div>
         </div>
         <div className={styles.newsInfo}>
            <div className={styles.newsDate}>{date}</div>
            <h3 className={styles.newsTitle}>{title}</h3>
            <div className={styles.hidePart}>
               <ArrowIcon className={styles.hideIcon} />
            </div>
         </div>
      </div>
   );
};