import './register.scss';
import RegisterImage from "../../images/register.svg";
import Background from '../../images/v_bg2.jpg';
import TextField from '@mui/material/TextField';

const Register = () => {
  return (
    <div className="register">
      <div className="inner" style={{backgroundImage: `url(${Background})`}}>
        <h1 className="registerTitle">Sign Up</h1>      
              
        <div className="left">
          <img src={RegisterImage} alt="" className="icon" />            
        </div>
        <div className="center">
          <div className="line" />            
        </div>
        <div className="right">
          <div className="registerForm">
            <TextField id="standard-basic" label="Username" variant="standard" className="input" />
            <TextField id="standard-basic" label="Email" variant="standard" className="input" />
            <TextField id="standard-basic" label="Password" type="password" variant="standard" className="input" />
            <button className="btn">Login</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Register
