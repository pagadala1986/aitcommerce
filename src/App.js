import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Slider from './Components/Slider';
import PopularProducts from './Components/PopularProducts';

function App() {
  return (
    <>
       <Header />
       <Slider />
       <PopularProducts />
       <Footer />
    </>
  
  );
}

export default App;
