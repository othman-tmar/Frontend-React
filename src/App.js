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
import Login from './admin/components/Login';
import Logout from './admin/components/Logout';
import Register from './admin/components/Register';
import ProtectedRoutes from "./admin/ProtectedRoutes";
import Nopage from './admin/components/Nopage';
import Banner from './components/Banner';


function App() {
  return (
    <div className="App">
      <ToastContainer />
   
      <Router>


     

        <Routes>
          <Route path='/menu' element={<NavScroll />} />
          <Route path='/' element={<Banner />}  />
         

          
          <Route element={<ProtectedRoutes />}>

           
            <Route path='/articles' element={<Listarticles />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/pay/:total' element={<StripePayment />} />
            <Route path="/checkout" element={<CheckoutSuccess />} />
            <Route path="/pdfcart" element={<PdfCart />} />
            <Route path='/articlesadmin' element={<ProductsAppAdmin />} />
           

          </Route>


          <Route path='/login' element={<Login />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/register' element={<Register />} />
          <Route path='*' element={<Nopage />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
