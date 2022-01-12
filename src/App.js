import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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

//import { auth } from './firebase/firebase.utils';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.action';

// 1. Functional Compoent
// function App() {
//   // const [currentUser, setCurrentUser] = useState({})  

//   useEffect(() => {    
//     //const { setCurrentUser } = this.props;

//     auth.onAuthStateChanged(async (userAuth) => {    
//       if(userAuth) {
//         const userRef = await createUserProfileDocument(userAuth);

//         userRef.onSnapshot(snapShot => {
//           setCurrentUser(
//             {            
//               id: snapShot.id,
//               ...snapShot.data()            
//             });
//         });        
//       }
//       setCurrentUser(userAuth);

//       //const cUser = userAuth.multiFactor.user;

//       // if(!userAuth) {        
//       //   console.log("There is no user information.");
//       // } 
//       // setCurrentUser(userAuth);
//     });
//   }, [])

//   return (
//     <Router>
//       {/* Header Component */}
//       {/* <Header /> */}

//       {/* <Navbar currentUser={currentUser} /> */}
//       <Navbar />

//       <Routes>
//         <Route exact path="/" element={<Home />} />          
//         {/* <Route exact path="/login" element={<Login />} />
//         <Route exact path="/register" element={<Register />} /> */}
//         <Route exact path="/signin" element={<SignInSignUp />} />
//         <Route exact path="/shop" element={<ShopPage />} />
//         <Route exact path="/shop/hats" element={<Hats />} /> 
//         <Route exact path="/shop/hats/:id" element={<HatDetail />} />          
//         <Route path="*" element={<NotFound/>}/>
//       </Routes>

//       {/* Footer Component */}
//       <Footer />

//     </Router>
//   );
// }

// 2. Class component
class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <Router>
        {/* Header Component */}
        {/* <Header /> */}

        {/* <Navbar currentUser={currentUser} /> */}
        <Navbar />

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
    );
  }
}

// ⭐ dispatch: component에 있는 state를 store에 전달
// 여기에서 지정된 setCurrentUser는 같은 component 내에서 props로 사용할 수 있다.
// action에 정의되어 있는 setCurrentUser를 사용해야 한다.
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  null,
  mapDispatchToProps
)(App);
