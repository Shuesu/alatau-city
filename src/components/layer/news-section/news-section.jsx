// NewsSection.tsx
import { NewsCard } from './components';
import { ArrowIcon } from '../../../assets/icons';
import styles from './news-section.module.css';

export const NewsSection = () => {
   const newsData = [
      {
         id: 1,
         title: "Загаловок главной новости о новом городе Алатау",
         date: "12.04.2025",
         image: `${import.meta.env.BASE_URL}images/partner-bg.jpg`,
         category: "Интервью"
      },
      {
         id: 2,
         title: "Загаловок главной новости о новом городе Алатау",
         date: "12.04.2025",
         image: `${import.meta.env.BASE_URL}images/partner-bg.jpg`,
         category: "Новости"
      },
      {
         id: 3,
         title: "Загаловок главной новости о новом городе Алатау",
         date: "12.04.2025",
         image: `${import.meta.env.BASE_URL}images/news1.jpg`,
         category: "События"
      }
   ];

   const mainNews = {
      title: "Заголовок главной новости о городе Алатау не больше 80 символов",
      date: "12.04.2025",
      image: `${import.meta.env.BASE_URL}images/partner-bg.jpg`,
      category: "Новости",
      hide: "Лид главной новости: краткий анонс содержания материала в одно-два тезисных предложения"
   };

   return (
      <div className={styles.newsSectionContainer}>
         <div className={styles.newsSection}>
            <div className={styles.newsHat}>
               <div className={`${styles.newsTitle} ${styles.newsTitleUp}`}>
                  Новости и события города
               </div>
               <div className={`${styles.newsLink} ${styles.uplink}`}>
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
               <div className={`${styles.newsLink} ${styles.hidelink}`}>
                  Все новости <ArrowIcon className={styles.newsIcon} />
               </div>
            </div>
         </div>
      </div>
   );
};