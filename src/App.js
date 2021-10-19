import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './AuthProvider/AuthProvider';
import DeliveryDetails from './components/DeliveryDetails/DeliveryDetails';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Menubar from './components/Menubar/Menubar';
import NotFound from './components/NotFound/NotFound';
import OrderDone from './components/OrderDone/OrderDone';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Register from './components/Register/Register';
import PrivateRoute from './PrivateRoute/PrivateRoute';

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
     
      <PrivateRoute path="/product/:productId">
<ProductDetails></ProductDetails>
      </PrivateRoute>

      <Route path="/login">
<Login></Login>
      </Route>
      <Route path="/register">
<Register></Register>
      </Route>
      <PrivateRoute path="/delivery">
        <DeliveryDetails></DeliveryDetails>
      </PrivateRoute>
      <PrivateRoute path="/order">
       <OrderDone></OrderDone>
      </PrivateRoute>
      <Route path="*">
<NotFound></NotFound>
      </Route>
   </Switch>
   <Footer></Footer>
   </BrowserRouter>
  </AuthProvider>
  );
}

export default App;
