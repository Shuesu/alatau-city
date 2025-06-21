// NewsSection.tsx
import { NewsCard } from './components';
import { ArrowIcon } from '../../../assets/icons';
import styles from './news-section.module.css';

export const NewsSection = () => {
   const newsData = [
      {
         id: 1,
         title: "Открытие нового парка в центре города",
         date: "15 мая 2023",
         image: "../../../../public/images/partner-bg.jpg",
         category: "События"
      },
      {
         id: 2,
         title: "Фестиваль уличной еды: даты и участники",
         date: "22 мая 2023",
         image: "../../../../public/images/partner-bg.jpg",
         category: "Культура"
      },
      {
         id: 3,
         title: "Реконструкция главной площади завершена",
         date: "30 мая 2023",
         image: "../../../../public/images/partner-bg.jpg",
         category: "Инфраструктура"
      }
   ];

   const mainNews = {
      title: "Городской совет утвердил новый бюджет на 2023 год",
      date: "10 мая 2023",
      image: "../../../../public/images/partner-bg.jpg",
      category: "Политика",
      hide: "Лид главной новости: краткий анонс содержания материала в одно-два тезисных предложения"
   };

   return (
      <div className={styles.newsSectionContainer}>
         <div className={styles.newsSection}>
            <div className={styles.newsHat}>
               <div className={styles.newsTitle}>
                  Новости и события города
               </div>
               <div className={styles.newsLink}>
                  Все новости <ArrowIcon className={styles.newsIcon} />
               </div>
            </div>
            <div className={styles.newsContent}>
               <div className={styles.newsMain}>
                  <div className={styles.newsCategory}>{mainNews.category}</div>
                  <img src={mainNews.image} alt={mainNews.title} className={styles.newsImage} />
                  <div className={styles.newsInfo}>
                     <div className={styles.newsDate}>{mainNews.date}</div>
                     <h3 className={styles.newsTitle}>{mainNews.title}</h3>
                     <h3 className={styles.newsHide}>{mainNews.hide}</h3>
                     <div className={styles.hidePart}>
                        <ArrowIcon className={styles.hideIcon} />
                     </div>
                  </div>
               </div>
               <div className={styles.newsCards}>
                  {newsData.map(news => (
                     <NewsCard
                        key={news.id}
                        title={news.title}
                        date={news.date}
                        image={news.image}
                        category={news.category}
                     />
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
};