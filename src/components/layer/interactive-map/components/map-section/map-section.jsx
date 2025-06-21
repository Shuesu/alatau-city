import { GreenMap, OrangeMap, YellowMap, BlueMap, PulseIcon } from '../../../../../assets/icons';
import styles from './map-section.module.css';

export const MapSection = ({ districts, activeDistrict, onDistrictClick }) => {
   const mapComponents = {
      green: GreenMap,
      orange: OrangeMap,
      yellow: YellowMap,
      blue: BlueMap
   };

   const mapPieces = [
      { id: 'green', className: styles.greenPiece },
      { id: 'orange', className: styles.orangePiece },
      { id: 'yellow', className: styles.yellowPiece },
      { id: 'blue', className: styles.bluePiece }
   ];

   return (
      <div className={styles.mapSection}>
         <div className={styles.mapContainer}>
            {mapPieces.map((piece) => {
               const MapComponent = mapComponents[piece.id];
               const district = districts.find(d => d.id === piece.id);

               return (
                  <div
                     key={piece.id}
                     className={`${styles.mapPiece} ${piece.className} ${activeDistrict === piece.id ? styles.active : ''} ${activeDistrict && activeDistrict !== piece.id ? styles.inactive : ''}`}
                     onClick={() => onDistrictClick(piece.id)}
                  >
                     <MapComponent className={styles.mapSvg} />
                     {(activeDistrict === null || activeDistrict === piece.id) && (
                        <div className={styles.mapContent}>
                           <span className={styles.mapText}>{district.title}</span>
                           <PulseIcon className={styles.pulseIcon} />
                        </div>
                     )}
                  </div>
               );
            })}
         </div>
      </div>
   );
};