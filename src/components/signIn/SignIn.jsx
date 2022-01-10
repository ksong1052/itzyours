import { useState } from 'react';
import './signIn.scss';
import FormInput from '../formInput/FormInput';
import CustomButton from '../customButton/CustomButton';
import { signInWithGoogle } from '../../firebase/firebase.utils';

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function onSubmitHandler(e) {    
    e.preventDefault();
    console.log("email & password", email, password);
  } 

  function onChnageEmailHandler(e) {
    setEmail(e.target.value);
  }

  function onChnagePasswordHandler(e) {
    setPassword(e.target.value)
  }

  return (
    <div className='signIn'>
      <h2>I already have an account</h2>
      <span><b>Sign In</b> with your email and password</span>

      <form onSubmit={onSubmitHandler}>
        <FormInput 
          type="email" name='email' value={email} required 
          label="email"
          handleChange={onChnageEmailHandler}
        />        
        <FormInput 
          type="password" name='password' value={password} required 
          label="password"
          handleChange={onChnagePasswordHandler}
        /> 

        <div className="gBtn">
          <div className="fBtn">
            <CustomButton type="submit"> Sign In </CustomButton>
          </div>
          {/* <div className="sBtn"> */}
            <button onClick={signInWithGoogle} className="sBtn"> 
              Sign in with google 
            </button>
          {/* </div>                     */}
        </div>   
      </form>
      
    </div>
  )
}

export default SignIn
