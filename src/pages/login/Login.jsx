import { useState } from 'react';
import './login.scss';
import { connect } from 'react-redux';
import Button from '@mui/material/Button';
import Google from "../../images/google.png";
import Github from "../../images/github.png";
import Background from '../../images/v_bg2.jpg';
import TextField from '@mui/material/TextField';
// import FormInput from '../../components/formInput/FormInput';
// import { auth } from '../../firebase/firebase.utils';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.action';


const Login = ({ googleSignInStart, emailSignInStart }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const [userCredentials, setUserCredentials] = useState({email: '', password: ''});

  // const google = () => {
  //   window.open("http://localhost:5000/auth/google", "_self");
  // }

  const github = () => {
    window.open("http://localhost:5000/auth/github", "_self");
  }

  // const { email, password } = userCredentials;
  const onSubmitHandler = async (e) => {    
    e.preventDefault();

    // 1. without Redux-Saga
    // try {
    //   await auth.signInWithEmailAndPassword(email, password);
  //   setEmail('');
    //   setPassword('');  
    // } catch(error) {
    //   console.log(error);
    // }    

    // 2. With Redux-saga  
    emailSignInStart(email, password);
    setEmail('');
    setPassword('');

  }; 

  function onChnageEmailHandler(e) {
    setEmail(e.target.value);
  }

  function onChnagePasswordHandler(e) {
    setPassword(e.target.value)
  }

  // const handleChange = event => {
  //   const { value, name } = event.target;
  //   setUserCredentials({ ...userCredentials, [name]: value });
  // }

  return (
    <div className="login">
      <div className="inner" style={{backgroundImage: `url(${Background})`}}>
        <h1 className="loginTitle">Sign In</h1>
        
          <div className="left">
            <div className="loginButton google" onClick={googleSignInStart}>
              <img src={Google} alt="" className="icon" />
              Google
            </div>
            <div className="loginButton github" onClick={github}>
              <img src={Github} alt="" className="icon" />
              Github
            </div>
          </div>
          <div className="center">
            <div className="line" />
            <div className="or">Or</div>
          </div>
          <div className="right">
            <form onSubmit={onSubmitHandler} className="loginForm">
              <TextField 
                id="email"
                label="Email"
                type="email"                
                variant="standard"
                onChange={onChnageEmailHandler}
                value={email}
                className="input"
                required
              />        
              <TextField 
                id="password"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="standard"
                onChange={onChnagePasswordHandler}
                value={password}
                className="input"
              /> 
              {/* <button className="btn" type="submit">Login</button> */}
              <Button type="submit" variant="contained" className='submitBtn'>Login</Button>
            </form>
          </div>  
              
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
})

export default connect(
  null, 
  mapDispatchToProps
)(Login);
