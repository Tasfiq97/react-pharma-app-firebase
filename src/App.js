import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Menubar from './components/Menubar/Menubar';
import ProductDetails from './components/ProductDetails/ProductDetails';

function App() {
  return (
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

   </Switch>
   <Footer></Footer>
   </BrowserRouter>
  );
}

export default App;
