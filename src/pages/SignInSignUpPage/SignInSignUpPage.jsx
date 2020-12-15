import React from 'react';
import SignInForm from '../../components/SignInForm'
import SignUpForm from '../../components/SignUpForm'
import './sign-in-sign-up-page.scss';

class SignInSignUpPage extends React.Component {
    render() {
      return (
        <div className="sign-in-sign-up-page">
          <SignUpForm />
          <SignInForm />
        </div>
      )
    }
}

export default SignInSignUpPage;
