import { Header, HeroSlider, InteractiveMap, NewsSection, InfoCardSection, PartnersSection } from './components/layer';
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
    </div >
  )
}

export default App;
