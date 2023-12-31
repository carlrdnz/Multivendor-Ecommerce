import {Routes, Route} from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import AllProducts from './components/AllProducts';
import ProductDetail from './components/ProductDetail';
import Categories from './components/Categories';
import CategoryProducts from './components/CategoryProducts';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/products' element={<AllProducts/>}/>
      <Route path='/categories' element={<Categories/>}/>
      <Route path='/category/:category_slug/:category_id' element={<CategoryProducts/>}/>
      <Route path='/product/:product_slug/:product_id' element={<ProductDetail/>}/>
    </Routes>
    <ScrollToTop/>
    <Footer />
    </>
  );
}

export default App;
