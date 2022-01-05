import './login.scss';
import Google from "../../images/google.png";
import Github from "../../images/github.png";
import Background from '../../images/v_bg2.jpg';
import TextField from '@mui/material/TextField';

const Login = () => {
  const google = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  }

  const github = () => {
    window.open("http://localhost:5000/auth/github", "_self");
  }

  return (
    <div className="login">
      <div className="inner" style={{backgroundImage: `url(${Background})`}}>
        <h1 className="loginTitle">Sign In</h1>
        
          <div className="left">
            <div className="loginButton google" onClick={google}>
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
            <div className="loginForm">
              <TextField id="standard-basic" label="Username" variant="standard" className="input" />
              <TextField id="standard-basic" label="Password" type="password" variant="standard" className="input" />
              <button className="btn">Login</button>
            </div>
          </div>  
              
      </div>
    </div>
  )
}

export default Login
