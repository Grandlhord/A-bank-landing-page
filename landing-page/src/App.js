import './App.css';
import Hero from './Component/Hero';
import Info from './Component/Info';
import Navbar from './Component/Navbar';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Hero />
        <Info />
    </div>
  )
}

export default App;
