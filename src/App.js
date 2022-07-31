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
        <Route path='*' element={<PageNotFound />}/>
      </Routes>
      <Footer />
    </Router>
    </>
  
  );
}

export default App;
