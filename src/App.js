import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Carousel from './Component/Carousel/Carousel';
import ProductHolder from './Component/Products/ProductHolder';
import Footer from './Component/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <ProductHolder />
    <Footer />
    </div>
  );
}

export default App;
