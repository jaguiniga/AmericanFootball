import { Component } from "react";
import "../css/Login.css";
/* import facebooklogo from './images/facebooklogo.png';
import instagram3 from './images/instagram3.jpg';
import google2 from './images/google2.png';
 */
const Login = () => {
  return (
    <body>
      <div class="container">
        <div class="row">
          <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div class="card card-signin my-5">
              <div class="card-body">
                <h5 class="card-title text-center">Log In</h5>
                <form class="form-signin">
                  <div class="form-label-group">
                    <input
                      type="email"
                      id="inputEmail"
                      class="form-control"
                      placeholder="Email address"
                      required
                      autofocus
                    />
                    <label for="inputEmail">Email address</label>
                  </div>

                  <div class="form-label-group">
                    <input
                      type="password"
                      id="inputPassword"
                      class="form-control"
                      placeholder="Password"
                      required
                    />
                    <label for="inputPassword">Password</label>
                  </div>
                  <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                  </p>
                  <div class="custom-control custom-checkbox mb-3">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="customCheck1"
                    />
                    <label class="custom-control-label" for="customCheck1">
                      Remember password
                    </label>
                  </div>

                  <button
                    class="btn btn-lg btn-primary btn-block text-uppercase"
                    type="submit">
                    Sign in
                  </button>
                  <hr class="my-4"></hr>
                  <button
                    class="btn btn-lg btn-google btn-block text-uppercase"
                    type="submit">
                    <i class="fab fa-google mr-2"></i> Sign in with Google
                  </button>
                  <button
                    class="btn btn-lg btn-instagram btn-block text-uppercase"
                    type="submit">
                    <i class="fab fa-instagram-f mr-2"></i> Sign in with
                    Instagram
                  </button>
                  <button
                    class="btn btn-lg btn-facebook btn-block text-uppercase"
                    type="submit">
                    <i class="fab fa-facebook-f mr-2"></i> Sign in with Facebook
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};
export default Login;
