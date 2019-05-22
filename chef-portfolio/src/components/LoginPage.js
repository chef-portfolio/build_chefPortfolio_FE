import React from "react";
import styled from "styled-components";

import Register from "./login/Register.js";

export default class LoginPage extends React.Component {
  state = {
    signUp: false
  };

  logIn = ev => {
    ev.preventDefault();
    this.props.logIn();
  };

  toggleRegister = ev => {
    this.setState({ signUp: !this.state.signUp });
  };

  render() {
    return (
      <>
        {this.state.signUp ? (
          <Register goBack={this.toggleRegister} />
        ) : (
          <Login>
            <h1>Login Page</h1>
            <form onSubmit={this.logIn}>
              <input placeholder="username" />
              <input placeholder="password" />
              <button type="submit">Log In</button>
            </form>
            <button onClick={this.toggleRegister}>Sign Up</button>
          </Login>
        )}
      </>
    );
  }
}

const Login = styled.section`
  h1 {
    margin: 0 auto;
  }
  form {
    margin: 0 auto;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    input {
      min-width: 300px;
      margin: 10px;
      font-size: 16px;
      text-align: center;
    }
    button {
      max-width: 100px;
    }
  }
`;
