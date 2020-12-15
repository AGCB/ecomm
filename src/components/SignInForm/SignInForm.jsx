import React from 'react';
import './sign-in-form.scss';

class SignInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }
  handleSubmit(e) {
    e.preventDefault();
    this.setState({email: '', password: ''})
  }

  handleChange(e) {
    this.setState({[e.name]: e.value})
  }

  render() {
    const { email, password } = this.state
    return (
      <div className="sign-in-form">
        <span className="sign-in-form-title">Sign In Form</span>
        <form
          onSubmit={this.handleSubmit}>
          <input
            name="email"
            type="email"
            value={email}
            onChange={e => this.handleChange(e.target)} />
          <label>emailz</label>

          <input
            name="password"
            type="password"
            value={password}
            onChange={e => this.handleChange(e.target)} />
          <label>passwordz</label>
          <input type="submit" value="Submit Form"/>
        </form>
      </div>
    )
  }
}

export default SignInForm;
