import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Checkout from "./pages/checkout/Checkout";
import Shop from "./pages/shop/Shop";
import Navbar from "./components/navbar/Navbar";
import { Cart } from "./pages/cart/Cart";
import { ShopContextProvider } from "./context/shop-context";
import Contact from "./pages/contact/Contact";
function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout/>}/>
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
