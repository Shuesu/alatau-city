import { useState, useEffect, useCallback } from 'react';
import { Button } from '../../ui';
import { ArrowDownIcon } from '../../../assets/icons';
import heroSliderBg from '../../../../public/images/hero-slider-bg.jpg';
import PartnerBg from '../../../../public/images/partner-bg.jpg';
import styles from './hero-slider.module.css';

export const HeroSlider = () => {
   const slides = [
      { id: 1, background: `url(${heroSliderBg})` },
      { id: 2, background: `url(${PartnerBg})` },
   ];

   const [currentSlide, setCurrentSlide] = useState(0);

   const goToNext = useCallback(() => {
      setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
   }, [slides.length]);

   const goToPrev = useCallback(() => {
      setCurrentSlide(prev => (prev === 0 ? slides.length - 1 : prev - 1));
   }, [slides.length]);

   useEffect(() => {
      const interval = setInterval(goToNext, 5000);
      return () => clearInterval(interval);
   }, [goToNext]); // Зависимость только от goToNext

   return (
      <div
         className={styles.heroContainer}
         style={{ backgroundImage: slides[currentSlide].background }}
      >
         <div className={styles.heroSlider}>
            <div className={styles.slideContent}>
               <h1 className={styles.title}>ALATAU CITY</h1>
               <p className={styles.subtitle}>Территория опережающего развития</p>
               <Button className={styles.button}>Подробнее</Button>
            </div>

            <div className={styles.controls}>
               <button
                  className={styles.controlButton}
                  onClick={goToPrev}
                  aria-label="Previous slide"
               >
                  <ArrowDownIcon className={`${styles.arrow} ${styles.arrowLeft}`} />
               </button>
               <button
                  className={styles.controlButton}
                  onClick={goToNext}
                  aria-label="Next slide"
               >
                  <ArrowDownIcon className={`${styles.arrow} ${styles.arrowRight}`} />
               </button>
            </div>
         </div>
      </div>
   );
};