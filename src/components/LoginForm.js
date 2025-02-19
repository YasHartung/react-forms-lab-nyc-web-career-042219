import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    if (!this.state.username || !this.state.password) return

    this.props.handleLogin(this.state)
  }

  render() {
    
    return (
      <form onSubmit={(e) => {
        this.handleSubmit(e)
      }
      }
      >
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={this.handleInputChange} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.handleInputChange} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
