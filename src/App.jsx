import { Header, HeroSlider, InteractiveMap } from './components/layer';
import './App.css'

function App() {
  return (
    <div className="AppContainer">
      <Header />
      <HeroSlider />
      <InteractiveMap />
      <div style={{ height: '300px' }}></div>
    </div >
  )
}

export default App;
