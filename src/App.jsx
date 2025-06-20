import { Header, HeroSlider } from './components/layer';
import './App.css'

function App() {
  return (
    <div className="AppContainer">
      <Header />
      <HeroSlider />
      <div style={{ height: '300px' }}></div>
    </div >
  )
}

export default App;
