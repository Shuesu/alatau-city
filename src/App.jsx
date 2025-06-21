import { Header, HeroSlider, InteractiveMap, NewsSection, InfoCardSection, PartnersSection, Footer } from './components/layer';
import './App.css'

function App() {
  return (
    <div className="AppContainer">
      <Header />
      <HeroSlider />
      <InteractiveMap />
      <InfoCardSection />
      <NewsSection />
      <PartnersSection />
      <Footer />
    </div >
  )
}

export default App;
