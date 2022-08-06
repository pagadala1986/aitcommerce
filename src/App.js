import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Slider from './Components/Slider';
import PopularProducts from './Components/PopularProducts';

import { Route,BrowserRouter as Router,Routes  } from "react-router-dom";
import PageNotFound from './Components/PageNotFound';
import EditProduct from './Components/PopularProducts/edit-product';
import KnowMoreProduct from './Components/PopularProducts/KnowMoreProduct';
import Contact from './Components/Contact';
import About from './Components/About';
import Register from './Components/Register';
import ProductList from './Components/Product/ProductList';
import Cart from './Components/cart/Cart';

function App() {
  const tle = "Edit Product";
  return (
    <>
    <Router>
        <Header />
        <Slider />
      <Routes>        
        <Route path='/' element={<PopularProducts />} />
        <Route path="/edit-product" element={<EditProduct title={tle} />} />
        <Route path="/know-more-product/:id" element={<KnowMoreProduct />} />
        <Route path="about" element={<About />}/>
        <Route path='contact-us' element={<Contact />}/>
        <Route path='register' element={<Register />}/>
        <Route path='products' element={<ProductList />}/>
        <Route path='cart' element={<Cart />}/>
      
        <Route path='*' element={<PageNotFound />}/>
      </Routes>
      <Footer />
    </Router>
    </>
  
  );
}

export default App;
