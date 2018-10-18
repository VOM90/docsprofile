import React from "react";

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      password_confirmation: "",
      errors: ""
    };
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = async event => {
    event.preventDefault();
    try {
      const user = await this.props.registerUser(this.state);
      this.props.setAuthUser(user);
    } catch (errors) {
      this.setState({ errors });
    }
  };

  render() {
    return (
      <div
        className="mh-fullscreen bg-img center-vh p-20"
        style={{ backgroundImage: "url(assets/img/bg-girl.jpg)" }}
      >
        <div
          className="card card-shadowed p-50 w-400 mb-0"
          style={{ maxWidth: "100%" }}
        >
          <h5 className="text-uppercase text-center">Register</h5>
          <br />
          <br />
          <form className="form-type-material" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Email address"
                onChange={this.handleInputChange}
                name="email"
              />
              {this.state.errors["email"] && (
                <small className="text-danger">
                  {this.state.errors["email"]}
                </small>
              )}
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                onChange={this.handleInputChange}
                name="password"
              />
              {this.state.errors["password"] && (
                <small className="text-danger">
                  {this.state.errors["password"]}
                </small>
              )}
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Password (confirm)"
                onChange={this.handleInputChange}
                name="password_confirmation"
              />
              {this.state.errors["password_confirmation"] && (
                <small className="text-danger">
                  {this.state.errors["password_confirmation"]}
                </small>
              )}
            </div>
            <br />
            <button
              className="btn btn-bold btn-block btn-primary"
              type="submit"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Signup;
