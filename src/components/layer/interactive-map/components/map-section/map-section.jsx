
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
      {
         id: 'green',
         className: styles.greenPiece,
         top: 0,
         left: 40,
         width: 384,
         height: 237,
         contentPosition: { top: '35%', left: '50%' }
      },
      {
         id: 'orange',
         className: styles.orangePiece,
         top: 146,
         right: 22,
         width: 376,
         height: 227,
         contentPosition: { top: '40%', left: '55%' }
      },
      {
         id: 'yellow',
         className: styles.yellowPiece,
         top: 313,
         left: -12,
         width: 237,
         height: 189,
         contentPosition: { bottom: '25%', left: '75%' }
      },
      {
         id: 'blue',
         className: styles.bluePiece,
         top: 491,
         left: 106,
         width: 85,
         height: 126,
         contentPosition: { top: '20%', left: '55%' }
      }
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
                     style={{
                        width: `${piece.width}px`,
                        height: `${piece.height}px`,
                        top: `${piece.top}px`,
                        left: piece.left !== undefined ? `${piece.left}px` : undefined,
                        right: piece.right !== undefined ? `${piece.right}px` : undefined,
                        cursor: 'pointer'
                     }}
                     onClick={() => onDistrictClick(piece.id)}
                  >
                     <MapComponent className={styles.mapSvg} />
                     {(activeDistrict === null || activeDistrict === piece.id) && (
                        <div
                           className={styles.mapContent}
                           style={{
                              top: piece.contentPosition.top,
                              left: piece.contentPosition.left,
                              bottom: piece.contentPosition.bottom,
                              transform: piece.contentPosition.left ? 'translateX(-50%)' : piece.contentPosition.top ? 'translateY(-50%)' : undefined
                           }}
                        >
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