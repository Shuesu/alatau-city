import { Button, SocialBar } from '../../ui'
import styles from './footer.module.css'

export const Footer = () => {
   return (
      <footer className={styles.footer}>
         <div className={styles.container}>
            {/* Первые два блока */}
            <div className={styles.column}>
               <h4 className={styles.title}>О городе</h4>
               <a href="#" className={styles.link}>О городе Алатау</a>
               <a href="#" className={styles.link}>СЭЗ Алатау</a>
               <a href="#" className={styles.link}>Инвесторам</a>
               <a href="#" className={styles.link}>Контакты</a>
            </div>

            <div className={styles.column}>
               <h4 className={styles.title}>Прочее</h4>
               <a href="#" className={styles.link}>Онлайн-подача заявки на участие в проектах</a>
               <a href="#" className={styles.link}>Регистрация юридического лица в Алатау</a>
               <a href="#" className={styles.link}>Карта сайта</a>
            </div>

            <div className={styles.largeColumn}>
               <h4 className={styles.title}>Есть вопросы или предложения?</h4>
               <p className={styles.text}>Отправьте почту и мы свяжемся с вами в ближайшее время!</p>

               <div className={styles.subscribe}>
                  <input
                     type="text"
                     placeholder="Email"
                     className={styles.input}
                  />
                  <Button className={styles.button}>Отправить</Button>
               </div>

               <p className={styles.socialText}>Следите за нами в соцсетях:</p>
               <SocialBar className={styles.socialBar} />
            </div>
         </div>
         <div className={styles.bottom}>
            <div className={styles.copyright}>© Alatau Cit, 2025</div>
            <div className={styles.dev}>Дизайн и разработка: KeipTe</div>
         </div>
      </footer>
   )
}