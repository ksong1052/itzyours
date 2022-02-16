import { useState } from 'react';
import './register.scss';
import { connect } from 'react-redux';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import RegisterImage from "../../images/register.svg";
import Background from '../../images/v_bg2.jpg';
import TextField from '@mui/material/TextField';
// import FormInput from '../../components/formInput/FormInput';
// import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import { signUpStart } from '../../redux/user/user.action';

const Register = ({ signUpStart }) => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onSubmitHandler = async (e) => {
  // function onSubmitHandler(e) {    
    e.preventDefault();    

    if(password !== confirmPassword) {
      alert('Password does not match');
      return;
    }
    
    // try {
    //   const { user } = await auth.createUserWithEmailAndPassword(email, password);
    //   await createUserProfileDocument(user, { displayName});

    //   setDisplayName('');
    //   setEmail('');
    //   setPassword('');
    //   setConfirmPassword('');      
    // } catch(error) {
    //   console.log(error);
    // }

    signUpStart({displayName, email, password});

    setDisplayName('');
    setEmail('');
    setPassword('');
    setConfirmPassword(''); 
  }

  // function DisplayNameHandler(e) {
  //   setDisplayName(e.target.value);
  // }
  
  // function EmailHandler(e) {
  //   setEmail(e.target.value);
  // }

  // function PasswordHandler(e) {
  //   setPassword(e.target.value);
  // }

  // function ConfirmPasswordHandler(e) {
  //   setConfirmPassword(e.target.value);
  // }

  function signHandler(e) {
    switch (e.target.name) {
      case 'displayName':
        setDisplayName(e.target.value);  
        break;
      case 'email':
        setEmail(e.target.value);
        break;
      case 'password':
        setPassword(e.target.value);
        break;
      case 'confirmPassword':
        setConfirmPassword(e.target.value);
        break;  
      default:
        break;
    }
  }

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
          <form className="registerForm" onSubmit={onSubmitHandler}>
            {/* <TextField id="standard-basic" label="Username" variant="standard" className="input" />
            <TextField id="standard-basic" label="Email" variant="standard" className="input" />
            <TextField id="standard-basic" label="Password" type="password" variant="standard" className="input" /> */}
            <TextField  
              id="displayName"
              name="displayName"
              label="Username"
              type="text"                
              variant="standard"
              onChange={signHandler}
              value={displayName}
              className="input"
              required
            />  
            <TextField 
              id="email"
              name="email"
              label="Email"
              type="email"                
              variant="standard"
              onChange={signHandler}
              value={email}
              className="input"
              required
            />       
            <TextField 
              id="password"
              name='password'
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="standard"
              onChange={signHandler}
              value={password}
              className="input"
              required
            />                
            <TextField 
              id="confirmPassword"
              name='confirmPassword'
              label="Confirm Password"
              type="password"
              autoComplete="current-password"
              variant="standard"
              onChange={signHandler}
              value={confirmPassword}
              className="input"
              required
            />
            {/* <button className="btn" type="submit">Register</button> */}
            <Button type="submit" variant="contained" endIcon={<SendIcon />} className='submitBtn'>Send</Button>
          </form>
        </div>

      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials))
});

export default connect(
  null,
  mapDispatchToProps
)(Register);
