import { ArrowDownIcon, RectangleIcon, CircleIcon, HexIcon, TriangleIcon } from '../../../../../assets/icons';
import styles from './accordion-section.module.css';

export const AccordionSection = ({ districts, activeDistrict, onDistrictClick }) => {
   const icons = {
      green: <CircleIcon className={`${styles.accordionIconShape} ${styles.greenIcon}`} />,
      orange: <RectangleIcon className={`${styles.accordionIconShape} ${styles.orangeIcon}`} />,
      yellow: <HexIcon className={`${styles.accordionIconShape} ${styles.yellowIcon}`} />,
      blue: <TriangleIcon className={`${styles.accordionIconShape} ${styles.blueIcon}`} />
   };

   return (
      <div className={styles.accordionSection}>
         <div className={styles.textContent}>
            Алатау – стратегический проект Казахстана, призванный стать международным Центрально-Азиатским хабом.
            <br />
            <br />
            Город расположен вдоль стратегической автомагистрали Алматы-Конаев, соединяющей транспортный коридор Западная Европа – Западный Китай. Представляет собой уникальное сочетание четырех дистриктов, общей площадью 88 000 га
         </div>

         <div className={styles.accordions}>
            {districts.map((district, index) => (
               <div key={index} className={styles.accordion}>
                  <button
                     className={styles.accordionHeader}
                     onClick={() => onDistrictClick(district.id)}
                  >
                     <span className={styles.accordionTitle}>
                        {icons[district.id]}
                        {district.title}
                     </span>
                     <ArrowDownIcon className={`${styles.accordionIcon} ${activeDistrict === district.id ? styles.rotate : ''}`} />
                  </button>
                  {activeDistrict === district.id && (
                     <div className={styles.accordionBody}>
                        {district.content}
                     </div>
                  )}
               </div>
            ))}
         </div>
      </div>
   )
}