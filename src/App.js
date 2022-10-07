import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Products from './Components/Products';
import { Routes, Route } from 'react-router-dom';
import Product from './Components/Product';
import Cart from './Components/Cart';

function App() {
  return (
 <>
   <Navbar/>
   <Routes>
    <Route path="/" element = {<Home/>} />
    <Route path="/products" element = {<Products/>} />
    <Route path="/products/:id" element = {<Product/>} />
    <Route path="/products/:id" element = {<Cart/>} />
   </Routes>
   
 </>
  );
}

export default App;
