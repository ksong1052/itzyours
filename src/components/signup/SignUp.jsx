import { useState } from 'react';
import './signup.scss';
import FormInput from '../formInput/FormInput';
import CustomButton from '../customButton/CustomButton';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

const SignUp = () => {
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
    
    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      await createUserProfileDocument(user, { displayName});

      setDisplayName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');      
    } catch(error) {
      console.log(error);
    }
  }

  function DisplayNameHandler(e) {
    setDisplayName(e.target.value);
  }
  
  function EmailHandler(e) {
    setEmail(e.target.value);
  }

  function PasswordHandler(e) {
    setPassword(e.target.value);
  }

  function ConfirmPasswordHandler(e) {
    setConfirmPassword(e.target.value);
  }

  return (
    <div className='signUp'>
      <h2>You want to create an account?</h2>
      <span><b>Sign Up</b> with your username, email, and password</span>
      <form className='signUpForm' onSubmit={onSubmitHandler}>
        <FormInput 
          type="text" name='displayName' value={displayName} required 
          label="Username"
          handleChange={DisplayNameHandler}
        />  
        <FormInput 
          type="email" name='email' value={email} required 
          label="Email"
          handleChange={EmailHandler}
        />       
        <FormInput 
          type="password" name='password' value={password} required 
          label="Password"
          handleChange={PasswordHandler}
        />                
        <FormInput 
          type="password" name='confirmPassword' value={confirmPassword} required 
          label="Confirm Password"
          handleChange={ConfirmPasswordHandler}
        /> 
        {/* <div className="fBtn">
          <CustomButton type="submit"> Sign Up </CustomButton>
        </div> */}
        <CustomButton type="submit"> Sign Up </CustomButton>
      </form>
    </div>
  )
}

export default SignUp;
