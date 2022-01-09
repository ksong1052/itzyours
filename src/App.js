import { useEffect, useState } from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/navbar/Navbar';
// import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
// import Login from "./pages/login/Login";
// import Register from "./pages/register/Register";
import SignInSignUp from './pages/SignInSignUp/SignInSignUp';
import NotFound from './pages/notFound/NotFound';
import Hats from './pages/hats/Hats';
import HatDetail from './pages/hatDetail/HatDetail';
import ShopPage from './pages/shopPage/ShopPage';
// import ProductDetail from './pages/productDetail/ProductDetail';
import { auth } from './firebase/firebase.utils';

function App() {
  const [currentUser, setCurrentUser] = useState({})
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      setCurrentUser(user);
      console.log("currentUser: ",currentUser);
    });
  }, [currentUser])

  return (
    <> 
      <Router>
        {/* Header Component */}
        {/* <Header /> */}
        <Navbar currentUser={currentUser} />

        <Routes>
          <Route exact path="/" element={<Home />} />          
          {/* <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} /> */}
          <Route exact path="/signin" element={<SignInSignUp />} />
          <Route exact path="/shop" element={<ShopPage />} />
          <Route exact path="/shop/hats" element={<Hats />} /> 
          <Route exact path="/shop/hats/:id" element={<HatDetail />} />          
          <Route path="*" element={<NotFound/>}/>
        </Routes>

        {/* Footer Component */}
        <Footer />

      </Router>
    </>
  );
}

export default App;
