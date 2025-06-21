import { Button } from '../../ui'
import { Youtube, Linkedin, Instagram, Facebook, Telegram } from '../../../assets/icons'
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
                  <Button>Отправить</Button>
               </div>

               <p className={styles.socialText}>Следите за нами в соцсетях:</p>
               <div className={styles.socialIcons}>
                  <a href="#" className={styles.socialLink}><Facebook className={styles.facebook} /></a>
                  <a href="#" className={styles.socialLink}><Instagram className={styles.instagram} /></a>
                  <a href="#" className={styles.socialLink}><Youtube className={styles.youtube} /></a>
                  <a href="#" className={styles.socialLink}><Linkedin className={styles.linkedin} /></a>
                  <a href="#" className={styles.socialLink}><Telegram className={styles.telegram} /></a>
               </div>
            </div>
         </div>
         <div className={styles.bottom}>
            <div className={styles.copyright}>© Alatau Cit, 2025</div>
            <div className={styles.dev}>Дизайн и разработка: KeipTe</div>
         </div>
      </footer>
   )
}