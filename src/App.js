import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route, Redirect  } from "react-router-dom";

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import NotFound from './pages/notFound/NotFound';
import ShopPage from './pages/shopPage/ShopPage';
import CheckOut from './pages/checkOut/CheckOut';
import Contact from './pages/contact/Contact';
// import Navbar from './components/navbar/Navbar';
// import SignInSignUp from './pages/SignInSignUp/SignInSignUp';
// import Hats from './pages/hats/Hats';
// import HatDetail from './pages/hatDetail/HatDetail';
// import ProductDetail from './pages/productDetail/ProductDetail';

//import { auth } from './firebase/firebase.utils';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { setCurrentUser } from './redux/user/user.action';
import { selectCurrentUser } from './redux/user/user.selector';

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
//         <Route  path="/shop/hats" element={<Hats />} /> 
//         <Route  path="/shop/hats/:id" element={<HatDetail />} />          
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
    // Store에 저장된 이름("setCUser")으로 props를 받아야 사용
    const { setCUser } = this.props;

    // console.log("this.props1", this.props);

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }
      
      setCUser(userAuth);
      // console.log("this.props2", this.props);
      // console.log("this.props.setCUser", setCUser);
      // console.log("this.props.currentUser", this.props.currentUser);
    });
  }

  componentWillUnmount() {    
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <Router>
        <Header />

        {/* <Navbar currentUser={currentUser} /> */}
        {/* <Navbar /> */}

        <Switch>
          <Route exact path="/" component={Home} />      
          {/* <Route exact path="/signin" element={<SignInSignUp />} /> */}   
          <Route exact path="/login" 
            component={() => 
              this.props.cUser ? (
                <Redirect to='/' />
              ) : (
                <Login />
              )
            } 
          />
          <Route exact path="/register" 
            component={() => 
              this.props.cUser ? (
                <Redirect to='/' />
              ) : (
                <Register />
              )
            } 
          />   
          <Route exact path="/checkout" component={CheckOut} /> 

          {/* 하위 path에 connecting 시키기 위해서는 exact를 붙여 주면 안 된다. 
              예를 들어, /shop/:id   or   /shop/hats/:id
          */}
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/contact" component={Contact} />

          <Route path="*" component={NotFound}/>
        </Switch> 

        <Footer />
      </Router>
    );
  }
}

// ⭐ store에 있는 state를 현 위치의 component에 "currentUser"으로 전달
// 현 component에서 지정된 이름 "setCUser"를 this.props("setCUser")로 접근하여 사용 가능
// 1.
// const mapStateToProps = ({user}) => ({
//   cUser: user.currentUser
// });

// 2.
const mapStateToProps = createStructuredSelector({
  cUser: selectCurrentUser
});

// ⭐ dispatch: component에 있는 state를 store에 전달
// action에 정의되어 있는 setCurrentUser를 사용해야 한다.
// 현 component에서 지정된 이름 "setCUser"를 this.props("setCUser")로 접근하여 store의 state를 변경 
const mapDispatchToProps = dispatch => ({
  setCUser: user => dispatch(setCurrentUser(user))
});

// ⭐ connect함수는 redux와 각 component들을 연결 시켜준다.
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
