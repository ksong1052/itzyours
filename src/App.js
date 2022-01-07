import './App.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import NotFound from './pages/notFound/NotFound';
import Hats from './pages/hats/Hats';
import ShopPage from './pages/shopPage/ShopPage';
import ProductDetail from './pages/productDetail/ProductDetail';

function App() {
  return (
    <> 
      <Router>
        {/* Header Component */}
        <Header />

        <Routes>
          <Route exact path="/" element={<Home />} />          
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/shop" element={<ShopPage />} />
          <Route exact path="/shop/hats" element={<Hats />} />          
          <Route exact path="/products" element={<ProductDetail />} />
          <Route path="*" element={<NotFound/>}/>
        </Routes>

        {/* Footer Component */}
        <Footer />

      </Router>
    </>
  );
}

export default App;
