import { useState } from 'react';
import styles from './interactive-map.module.css';
import { AccordionSection, MapSection } from './components'

export const InteractiveMap = () => {
   const [activeDistrict, setActiveDistrict] = useState(null);

   const districts = [
      {
         id: 'green',
         title: "Green District",
         content: "Крупнейший финансовый, деловой, культурный и архитектурный центр мирового уровня. Деловой центр включает в себя многофункциональные комплексы, объединяющие все необходимое для бизнеса, отдыха и развлечений.",
      },
      {
         id: 'orange',
         title: "Growing District",
         content: "Крупнейший финансовый, деловой, культурный и архитектурный центр мирового уровня. Деловой центр включает в себя многофункциональные комплексы, объединяющие все необходимое для бизнеса, отдыха и развлечений.",
      },
      {
         id: 'yellow',
         title: "Golden District",
         content: "Крупнейший финансовый, деловой, культурный и архитектурный центр мирового уровня. Деловой центр включает в себя многофункциональные комплексы, объединяющие все необходимое для бизнеса, отдыха и развлечений.",
      },
      {
         id: 'blue',
         title: "Gate District",
         content: "Крупнейший финансовый, деловой, культурный и архитектурный центр мирового уровня. Деловой центр включает в себя многофункциональные комплексы, объединяющие все необходимое для бизнеса, отдыха и развлечений.",
      },
   ];

   const handleDistrictClick = (districtId) => {
      setActiveDistrict(activeDistrict === districtId ? null : districtId);
   };

   return (
      <div className={styles.interactiveMapContainer}>
         <div className={styles.interactiveMap}>
            <AccordionSection
               districts={districts}
               activeDistrict={activeDistrict}
               onDistrictClick={handleDistrictClick}
            />
            <MapSection
               districts={districts}
               activeDistrict={activeDistrict}
               onDistrictClick={handleDistrictClick}
            />
         </div>
      </div>
   );
};