
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from "./pages/Footer"
import Menu from './pages/Menu'

import About from './pages/About';
import OnlineOrder from './pages/OnlineOrder';
import Contact from './pages/Contact';
import Cart from './pages/CartPage';
import Login from './pages/AuthPage';
import OrderDetails from './components/OrderDetails';
import { ToastContainer } from 'react-toastify';
import Payment from './pages/Payment';
import AuthPage from './pages/AuthPage';
function App() {
  

  return (
    <>
    <ToastContainer />
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/orders" element={<OnlineOrder />} />
        <Route path= "/about"  element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path ="/cart" element={<Cart/>} />
        <Route path ="/login" element={<Login/>} />
        <Route path="/orderdetails" element={<OrderDetails />} />
       <Route path = "/cart" element = {<Cart/>} />
       <Route path="/payment" element={<Payment />} />
       <Route path='/auth' element={<AuthPage/>} />
      </Routes>
      <Footer/>
    </Router>
    </>
  );
};
  


export default App
