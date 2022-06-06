import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Carousel from './Component/Carousel/Carousel';
import ProductHolder from './Component/Products/ProductHolder';
import Footer from './Component/Footer/Footer';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Cart from './Component/Cart/Cart';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      
      <Carousel />
      <Routes>

        <Route path='/' element={<ProductHolder />} />
        <Route path='/cart' element={<Cart />}  />
      </Routes>
     
    <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
