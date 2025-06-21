import { InfoCard } from './components';
import styles from './info-section.module.css';

export const InfoCardSection = () => {
   return (
      <div className={styles.infoSection}>
         <div className={styles.infoMain}>
            <div className={styles.infoMainBg}>Город инвестиционных возможностей</div>
         </div>
         <div className={styles.cardsColumn}>
            <InfoCard
               title="Специальная индустриальная зона ALATAU"
               description="Почему стоит инвестировать в ALATAU SEZ?"
               icon="rectangle"
               color="var(--orange)"
            />
            <InfoCard
               title="Как стать инвестором?"
               description="Регистрация юридического лица в Алатау, налоговые льготы для компаний, государственная поддержка"
               icon="hex"
               color="var(--green)"
            />
            <InfoCard
               title="Свободная таможенная зона"
               description="Упрощенные условия для ввоза и вывоза товаров без уплаты таможенных пошлин"
               icon="triangle"
               color="var(--blue)"
            />
         </div>
      </div>
   );
};
