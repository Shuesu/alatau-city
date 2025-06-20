import { useState } from 'react';
import { ArrowDownIcon, RectangleIcon, CircleIcon, HexIcon, TriangleIcon } from '../../../../../assets/icons';
import styles from './accordion-section.module.css';

export const AccordionSection = () => {
   const [activeAccordion, setActiveAccordion] = useState(null);

   const toggleAccordion = (index) => {
      setActiveAccordion(activeAccordion === index ? null : index);
   };

   const accordions = [
      {
         title: "Green District",
         content: "Крупнейший финансовый, деловой, культурный и архитектурный центр мирового уровня. Деловой центр включает в себя многофункциональные комплексы, объединяющие все необходимое для бизнеса, отдыха и развлечений.",
         icon: <CircleIcon className={`${styles.accordionIconShape} ${styles.greenIcon}`} />
      },
      {
         title: "Growing District",
         content: "Content for accordion 2",
         icon: <RectangleIcon className={`${styles.accordionIconShape} ${styles.orangeIcon}`} />
      },
      {
         title: "Golden District",
         content: "Content for accordion 3",
         icon: <HexIcon className={`${styles.accordionIconShape} ${styles.yellowIcon}`} />
      },
      {
         title: "Gate District",
         content: "Content for accordion 4",
         icon: <TriangleIcon className={`${styles.accordionIconShape} ${styles.blueIcon}`} />
      },
   ];

   return (
      <div className={styles.accordionSection}>
         <div className={styles.textContent}>
            Алатау – стратегический проект Казахстана, призванный стать международным Центрально-Азиатским хабом.
            <br />
            <br />
            Город расположен вдоль стратегической автомагистрали Алматы-Конаев, соединяющей транспортный коридор Западная Европа – Западный Китай. Представляет собой уникальное сочетание четырех дистриктов, общей площадью 88 000 га
         </div>

         <div className={styles.accordions}>
            {accordions.map((accordion, index) => (
               <div key={index} className={styles.accordion}>
                  <button
                     className={styles.accordionHeader}
                     onClick={() => toggleAccordion(index)}
                  >
                     <span className={styles.accordionTitle}>
                        {accordion.icon}
                        {accordion.title}
                     </span>
                     <ArrowDownIcon className={`${styles.accordionIcon} ${activeAccordion === index ? styles.rotate : ''}`} />
                  </button>
                  {activeAccordion === index && (
                     <div className={styles.accordionBody}>
                        {accordion.content}
                     </div>
                  )}
               </div>
            ))}
         </div>
      </div>
   )
}