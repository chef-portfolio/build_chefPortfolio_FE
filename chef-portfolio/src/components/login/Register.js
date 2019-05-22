import React from "react";
import styled from "styled-components";

export default class Register extends React.Component {
  register = ev => {
    ev.preventDefault();
    console.log("THIS ISNT REALLY REGISTERING ANYTHING! LOL NUB");
  };

  render() {
    return (
      <SignUp>
        <h1>Sign Up</h1>
        <form onSubmit={this.register}>
          <input placeholder="username" />
          <input placeholder="password" />
          <input placeholder="name" />
          <input placeholder="location" />
          <input placeholder="contact info" />
          <button type="submit">Register</button>
        </form>
        <button onClick={this.props.goBack}>Back to Log-In</button>
      </SignUp>
    );
  }
}

const SignUp = styled.section`
  padding-top: 50px;
  h1 {
    margin: 0 auto;
  }
  form {
    margin: 0 auto;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    input {
      margin: 10px;
      font-size: 16px;
      text-align: center;
    }
  } 
`;
   