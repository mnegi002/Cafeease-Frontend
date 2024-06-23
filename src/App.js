import {BrowserRouter as Router , Routes , Route , Navigate} from 'react-router-dom';
import Home from './home/Home';
import Contact from './contact/Contact';
import Menu from './menu/Menu';
import Navbar from './home/Navbar';
import CartProvider from './cart/cartContextAPI/CartProvider';
// import Signup from './screens/Signup';
// import Login from './screens/Login';
// import Auth from './screens/Auth';
import Myorders from './order/Myorders';
// import PaymentPage from './cart/payment/PaymentPage';
import Success from './order/orderStatus/Success';
import Failed from './order/orderStatus/Failed';
import AuthForm from './screens/AuthForm';
// import AuthPage from './screens/AuthPage';
// import Footer from './home/Footer';

function App() {
  return (
    <CartProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Navbar/>}>
          <Route index element = {<Home/>}/>
          <Route path="menu" element = {<Menu/>}/>
          <Route path="contact" element = {<Contact/>}/>
          <Route path="order" element={<Myorders/>}/>
          {/* <Route path="payments" element={<PaymentPage/>}/> */}
          <Route path="success" element={<Success/>}/>
          <Route path="cancel" element={<Failed/>}/>
          <Route path="*" element={<Navigate to = "/" />}/>
        </Route>
          {/* <Route path="/login" element={<Login/>}/> */}
          <Route path="/authform" element={<AuthForm/>}/>
          {/*  <Route path="/createuser" element={<Signup/>}/> */}
      </Routes>
    </Router>
    </CartProvider>
  );
}

export default App;
