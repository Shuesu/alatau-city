import { Youtube, Linkedin, Instagram, Facebook, Telegram } from '../../../assets/icons'
import styles from './social-bar.module.css';

export const SocialBar = ({ className = '' }) => {
   return (
      <div className={`${styles.socialIcons} ${className}`}>
         <a href="#" className={styles.socialLink}><Facebook className={styles.facebook} /></a>
         <a href="#" className={styles.socialLink}><Instagram className={styles.instagram} /></a>
         <a href="#" className={styles.socialLink}><Youtube className={styles.youtube} /></a>
         <a href="#" className={styles.socialLink}><Linkedin className={styles.linkedin} /></a>
         <a href="#" className={styles.socialLink}><Telegram className={styles.telegram} /></a>
      </div >
   );
}