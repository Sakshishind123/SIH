import React from 'react';
import 'mdb-ui-kit/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './signup.css'
const SignupPage = () => {
  return (
    <section className="background-radial-gradient overflow-hidden">
     
      <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
        <div className="row gx-lg-5 align-items-center mb-5">
          <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: 10 }}>
            <h1 className="my-5 display-5 fw-bold ls-tight" style={{ color: 'hsl(218, 81%, 95%)' }}>
              Sign up <br />
              <span style={{ color: 'hsl(218, 81%, 75%)' }}>for an account</span>
            </h1>
            <p className="mb-4 opacity-70" style={{ color: 'hsl(218, 81%, 85%)' }}>
              Join us today and start exploring amazing features and benefits.
              Create your account and enjoy the best we have to offer.
            </p>
          </div>

          <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
            <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
            <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

            <div className="card bg-glass">
              <div className="card-body px-4 py-5 px-md-5">
                <form>
                  {/* 2 column grid layout with text inputs for the first and last names */}
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div data-mdb-input-init className="form-outline">
                        <input type="text" id="form3Example1" className="form-control" />
                        <label className="form-label" htmlFor="form3Example1">First name</label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div data-mdb-input-init className="form-outline">
                        <input type="text" id="form3Example2" className="form-control" />
                        <label className="form-label" htmlFor="form3Example2">Last name</label>
                      </div>
                    </div>
                  </div>

                  {/* Email input */}
                  <div data-mdb-input-init className="form-outline mb-4">
                    <input type="email" id="form3Example3" className="form-control" />
                    <label className="form-label" htmlFor="form3Example3">Email address</label>
                  </div>

                  {/* Password input */}
                  <div data-mdb-input-init className="form-outline mb-4">
                    <input type="password" id="form3Example4" className="form-control" />
                    <label className="form-label" htmlFor="form3Example4">Password</label>
                  </div>

                  {/* Confirm Password input */}
                  <div data-mdb-input-init className="form-outline mb-4">
                    <input type="password" id="form3Example5" className="form-control" />
                    <label className="form-label" htmlFor="form3Example5">Confirm Password</label>
                  </div>

                  {/* Checkbox */}
                  <div className="form-check d-flex justify-content-center mb-4">
                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked />
                    <label className="form-check-label" htmlFor="form2Example33">
                      I agree to the terms and conditions
                    </label>
                  </div>

                  {/* Submit button */}
                  <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-4"
                   style={{
                    display: 'flex',
                    width: '20%', // or any specific width you want to set
                    justifyContent: 'center',
                    alignItems: 'center',
                    bottom: '20%'
                  }} >
                    Sign up
                  </button>

                  {/* Register buttons */}
                  <div className="text-center">
                    <p>or sign up with:</p>
                    <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
                      <i className="fab fa-facebook-f"></i>
                    </button>

                    <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
                      <i className="fab fa-google"></i>
                    </button>

                    <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
                      <i className="fab fa-twitter"></i>
                    </button>

                    <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
                      <i className="fab fa-github"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignupPage;
