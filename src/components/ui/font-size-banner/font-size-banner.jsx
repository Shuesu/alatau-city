import styles from './font-size-banner.module.css'

export const FontSizeBanner = () => {
   return (
      <div className={styles.fontSizeBanner}>
         Размер шрифта:
         <span className={`${styles.fontletter} ${styles.fontletterFirst}`}>А</span>
         <span className={`${styles.fontletter} ${styles.fontletterSecond}`}>А</span>
         <span className={`${styles.fontletter} ${styles.fontletterThird}`}>А</span>
      </div>
   );
}