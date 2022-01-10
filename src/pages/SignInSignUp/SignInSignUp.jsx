import React from 'react';
import './signInSignUp.scss';
import SignIn from '../../components/signIn/SignIn';
import SignUp from '../../components/signup/SignUp';

const SignInSignUp = () => {
  return (
    <div className='signInSignUp'>
      <SignIn />
      <SignUp />
    </div>
  )
}

export default SignInSignUp
