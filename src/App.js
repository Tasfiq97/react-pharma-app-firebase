import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './AuthProvider/AuthProvider';
import DeliveryDetails from './components/DeliveryDetails/DeliveryDetails';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Menubar from './components/Menubar/Menubar';
import OrderDone from './components/OrderDone/OrderDone';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Register from './components/Register/Register';

function App() {
  return (
  <AuthProvider>
         <BrowserRouter>
   <Menubar></Menubar>
   <Switch>
      <Route exact path="/">
<Home></Home>
      </Route>
      <Route path="/home">
<Home></Home>
      </Route>
     
      <Route path="/product/:productId">
<ProductDetails></ProductDetails>
      </Route>

      <Route path="/login">
<Login></Login>
      </Route>
      <Route path="/register">
<Register></Register>
      </Route>
      <Route path="/delivery">
        <DeliveryDetails></DeliveryDetails>
      </Route>
      <Route path="/order">
       <OrderDone></OrderDone>
      </Route>
   </Switch>
   <Footer></Footer>
   </BrowserRouter>
  </AuthProvider>
  );
}

export default App;
