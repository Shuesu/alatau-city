import { GreenMap, OrangeMap, YellowMap, BlueMap, PulseIcon } from '../../../../../assets/icons';
import styles from './map-section.module.css';

export const MapSection = () => {
   return (
      <div className={styles.mapSection}>
         {/* Основной контейнер для карты */}
         <div className={styles.mapContainer}>
            {/* Зеленая часть */}
            <div className={`${styles.mapPiece} ${styles.greenPiece}`}>
               <GreenMap className={styles.mapSvg} />
               <div className={styles.mapContent}>
                  <span className={styles.mapText}>Green District</span>
                  <PulseIcon className={styles.pulseIcon} />
               </div>
            </div>

            {/* Оранжевая часть */}
            <div className={`${styles.mapPiece} ${styles.orangePiece}`}>
               <OrangeMap className={styles.mapSvg} />
               <div className={styles.mapContent}>
                  <span className={styles.mapText}>Growing District</span>
                  <PulseIcon className={styles.pulseIcon} />
               </div>
            </div>

            {/* Желтая часть */}
            <div className={`${styles.mapPiece} ${styles.yellowPiece}`}>
               <YellowMap className={styles.mapSvg} />
               <div className={styles.mapContent}>
                  <span className={styles.mapText}>Golden District</span>
                  <PulseIcon className={styles.pulseIcon} />
               </div>
            </div>

            {/* Синяя часть */}
            <div className={`${styles.mapPiece} ${styles.bluePiece}`}>
               <BlueMap className={styles.mapSvg} />
               <div className={styles.mapContent}>
                  <span className={styles.mapText}>Gate District</span>
                  <PulseIcon className={styles.pulseIcon} />
               </div>
            </div>
         </div>
      </div>
   );
};