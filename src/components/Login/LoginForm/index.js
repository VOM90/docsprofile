import React from "react";

const Login = ({ handleInputChange, handleSubmit, errors }) => {
  return (
    <div
      className="mh-fullscreen bg-img center-vh p-20"
      style={{ backgroundImage: "url(assets/img/bg-girl.jpg)" }}
    >
      <div
        className="card card-shadowed p-50 w-400 mb-0"
        style={{ maxWidth: "100%" }}
      >
        <h5 className="text-uppercase text-center">Signin</h5>
        <br />
        <br />
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Email address"
              name="email"
              onChange={handleInputChange}
            />
            {errors.email && (
              <small className="text-danger">{errors.email}</small>
            )}
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              name="password"
              onChange={handleInputChange}
            />
            {errors.password && (
              <small className="text-danger">{errors.password}</small>
            )}
          </div>

          <div className="form-group">
            <button
              className="btn btn-bold btn-block btn-primary"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
