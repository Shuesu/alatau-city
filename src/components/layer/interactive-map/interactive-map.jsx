import styles from './interactive-map.module.css';
import { AccordionSection, MapSection } from './components'

export const InteractiveMap = () => {

   return (
      <div className={styles.interactiveMapContainer}>
         <div className={styles.interactiveMap}>
            <AccordionSection />
            <MapSection />
         </div>
      </div>
   );
};