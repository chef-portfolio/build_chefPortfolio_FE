import React from "react";
import LoginPage from "./LoginPage";

const Login_HOC = App =>
  class extends React.Component {
    state = {
      isLoggedIn: false
    };

    logIn = ev => {
      this.setState({ isLoggedIn: true });
    };

    logOut = () => {
      this.setState({ isLoggedIn: false });
    };

    render() {
      if (this.state.isLoggedIn) {
        return (
          <App
            logOut={this.logOut}
            chefs={this.props.chefs}
            recipes={this.props.recipes}
          />
        );
      } else {
        return <LoginPage logIn={this.logIn} />;
      }
    }
  };

export default Login_HOC;
