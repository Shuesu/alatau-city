import { Header, HeroSlider, InteractiveMap, NewsSection, InfoCardSection, PartnersSection, Footer } from './components/layer';
import { useState } from 'react';
import styles from './App.module.css'

function App() {

  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  return (
    <div className={`${styles.AppContainer} ${isBurgerOpen ? styles.appContainerGrey : ''}`}>
      <Header isBurgerOpen={isBurgerOpen} setIsBurgerOpen={setIsBurgerOpen} />
      <div className={isBurgerOpen ? styles.appContentHide : styles.upHide}>
        <HeroSlider />
        {/* <InteractiveMap /> */}
        <InfoCardSection />
        <NewsSection />
        <PartnersSection />
        <Footer />
      </div>
    </div >
  )
}

export default App;
