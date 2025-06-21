import { Header, HeroSlider, InteractiveMap, NewsSection, InfoCardSection } from './components/layer';
import './App.css'

function App() {
  return (
    <div className="AppContainer">
      <Header />
      <HeroSlider />
      <InteractiveMap />
      <InfoCardSection />
      <NewsSection />
    </div >
  )
}

export default App;
