import './App.css';
//import { PRODUCTS } from "./products.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Navbar} from "./components/Navbar";
import {Shop} from "./pages/shop/shop";
import {Cart} from "./pages/cart/cart";
import { ShopContextProvider } from './context/shop-context';
import { Footer } from './components/footer'
function App() {
  return (
    <div className="App">
      <ShopContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />}/>
          <Route path="/cart" element={<Cart />}/>
        </Routes> 
        <Footer />
      </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
