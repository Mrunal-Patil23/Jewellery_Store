
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.jpg'
import women_banner from './Components/Assets/banner_women.jpg'
import gift_banner from './Components/Assets/banner_gift.jpg'
import AboutUs from './Components/AboutUs/AboutUs';
import CheckOut from './Components/CheckOut/CheckOut'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/> 
      <Routes>
        <Route path='/' element={<Shop/>} />
        <Route path='/men' element={<ShopCategory banner={men_banner} category="men"/>} />
        <Route path='/women' element={<ShopCategory banner={women_banner} category="women"/>} />
        <Route path='/gifts' element={<ShopCategory banner={gift_banner} category="gifts"/>} />
       
        <Route path='product' element={<Product/>}>
           <Route path=':productId' element={<Product/>} />
        </Route>
        <Route path='/cart' element={<Cart/>} />
        <Route path='/login' element={<LoginSignup/>} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/checkout' element={<CheckOut />} />

      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
