import './App.css';
import NavScroll from './components/NavScroll';
import Cart from './components/articles/Cart';
import Listarticles from './components/articles/Listarticles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StripePayment from './components/articles/StripePayment';
import CheckoutSuccess from './components/articles/CheckoutSuccess';
import PdfCart from './components/articles/PdfCart';
import '@fortawesome/fontawesome-free/css/all.min.css';
import ProductsAppAdmin from './admin/components/articles/ProductsAppAdmin';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <ToastContainer/>
      <Router>
      
      <NavScroll/>

 
      <Routes>
       <Route path='/' element={<Listarticles/>} ></Route>
       <Route path='/articles' element={<Listarticles/>} ></Route>
       <Route path='/cart' element={<Cart/>}/>
       <Route path='/pay/:total' element={<StripePayment/>}/>
       <Route path="/checkout" element={<CheckoutSuccess/>}/>
       <Route path="/pdfcart" element={<PdfCart/>}/>
       <Route path='/articlesadmin' element={<ProductsAppAdmin/>}/>
       </Routes>
     </Router>
    </div>
  );
}

export default App;
