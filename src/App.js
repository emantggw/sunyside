import './emant.style.css';

// Components
import Banner from './components/Banner';
import Header from './components/Header';
import Footer from './components/Footer';
import Products from './components/Products';

function App() {

  return (
    <div>
      
      <Header />
      <Banner motto={"We are creatives"}/>
      <Products/>
    </div>

    
  );
}

export default App;
 