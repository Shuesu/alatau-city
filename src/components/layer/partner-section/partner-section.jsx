import { Button } from '../../ui'
import styles from './partner-section.module.css'

export const PartnersSection = () => {
   return (
      <div className={styles.partnerSection}>
         <h2 className={styles.title}>Наши партнеры</h2>
         <p className={styles.info}>
            Алатау – город, где встречаются амбиции, инновации и партнерство.
            Совместными усилиями мы реализуем значимые проекты, открывая новые
            горизонты для жителей города и формируя будущее, наполненное возможностями.
         </p>
         <Button className={styles.button}>Подробнее</Button>
      </div>
   )
}