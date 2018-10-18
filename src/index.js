import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, withRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import Login from "./components/Login";
import Signup from "./components/Signup";
import CreateDocument from "./components/CreateDocument";
import Profile from "./components/Profile";
import AuthService from "./sevices/auth";
import DocumentsService from "./sevices/documents";

import * as serviceWorker from "./serviceWorker";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      authUser: null
    };
  }

  componentDidMount() {
    const user = localStorage.getItem("user");

    if (user) {
      this.setState({
        authUser: JSON.parse(user)
      });
    }
  }

  setAuthUser = authUser => {
    this.setState(
      {
        authUser
      },
      () => {
        localStorage.setItem("user", JSON.stringify(authUser));
        this.props.history.push("/");
      }
    );
  };

  removeAuthUser = () => {
    localStorage.removeItem("user");
    this.setState({ authUser: null });
  };

  render() {
    const { location } = this.props;
    return (
      <div>
        {location.pathname !== "/signin" &&
          location.pathname !== "/signup" && (
            <Navbar
              authUser={this.state.authUser}
              removeAuthUser={this.removeAuthUser}
            />
          )}
        <Route exact path="/" component={Welcome} />
        <Route
          path="/signin"
          render={props => (
            <Login
              {...props}
              setAuthUser={this.setAuthUser}
              loginUser={this.props.AuthService.loginUser}
            />
          )}
        />
        <Route
          path="/signup"
          render={props => (
            <Signup
              {...props}
              registerUser={this.props.AuthService.registerUser}
              setAuthUser={this.setAuthUser}
            />
          )}
        />
        <Route
          exact
          path="/profile"
          render={props => (
            <Profile
              {...props}
              getDocuments={this.props.DocumentsService.getDocumments}              
            />
          )}
        />
        <Route
          path="/profile/documents/add"
          render={props => (
            <CreateDocument
              {...props}
              createDocument={this.props.DocumentsService.сreateDocument}
            />
          )}
        />
        {location.pathname !== "/signin" }
      </div>
    );
  }
}

const Main = withRouter(props => {
  return (
    <App
      AuthService={new AuthService()}
      DocumentsService={new DocumentsService()}
      {...props}
    />
  );
});

ReactDOM.render(
  <BrowserRouter>
    <Main />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
