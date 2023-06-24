import './App.css';
import Article from './Component/Articles';
import Hero from './Component/Hero';
import Info from './Component/Info';
import Navbar from './Component/Navbar';
import Articles from './Component/Articles';
import confetti from './images/image-confetti.jpg'
import currency from './images/image-currency.jpg'
import plane from './images/image-plane.jpg'
import restaurant from './images/image-restaurant.jpg'
import Footer from './Component/Footer';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Hero />
        <Info />
        <h2 className='Articles-header'>Latest Articles</h2>
        <div className='Articles'>
            <Articles 
              image={currency}
              author="By Claire Robinson"
              title="Receive money in any currency with no fees"
              passage="he world is getting smaller and we're becoming more mobile.
              So why should you be forced to only receive money in a single..."
        
            />
          <Articles 

              image={restaurant}
              author="By Claire Robinson"
              title="Receive money in any currency with no fees"
              passage="he world is getting smaller and we're becoming more mobile.
              So why should you be forced to only receive money in a single..."
        
          />

          <Articles 
              image={plane}
              author="By Claire Robinson"
              title="Receive money in any currency with no fees"
              passage="he world is getting smaller and we're becoming more mobile.
              So why should you be forced to only receive money in a single..."
        
          />
          <Articles 
              image={confetti}
              author="By Claire Robinson"
              title="Receive money in any currency with no fees"
              passage="he world is getting smaller and we're becoming more mobile.
              So why should you be forced to only receive money in a single..."
        
          />
        </div>
        <Footer />
    </div>
  )
}

export default App;
