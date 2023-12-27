/* eslint-disable react/prop-types */
import { useState } from "react";

export function SignUp(props) {
  console.log("Rendering Login component");

  const [signUpSuccess, setSignUpSuccess] = useState(false);

  const handleSignUpSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onSignUp(params);
    setSignUpSuccess(true);
    event.target.reset();

    setTimeout(() => {
      setSignUpSuccess(false);
    }, 3000);
  };

  return (
    <div id="login">
      {signUpSuccess && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            padding: "20px",
            backgroundColor: "green",
            color: "white",
            fontSize: "1.5em",
            borderRadius: "8px",
          }}
        >
          Account created successfully!
        </div>
      )}
      <div className="contact-page section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="section-heading">
                <h6>| About Us</h6>
                <h2>What is PwrBldr?</h2>
              </div>
              <p>
                PwrBldr is a simple user friendly application to take the stress out of putting together a workout plan.
                It will guide you along the way to build a well rounded program that suits your individual needs.
              </p>
              <div className="row">
                <div className="col-lg-12">
                  <div className="item phone">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/6016/6016314.png"
                      alt=""
                      style={{ maxWidth: "52px" }}
                    />
                    <h6>
                      Get Stronger
                      <br />
                      <span>Start Today!</span>
                    </h6>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="item email">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/6016/6016314.png"
                      alt=""
                      style={{ maxWidth: "52px" }}
                    />
                    <h6>
                      pwrblder@email.com
                      <br />
                      <span>Business Email</span>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <form id="contact-form" action="" method="post" onSubmit={handleSignUpSubmit}>
                <div className="row">
                  <div className="col-lg-12">
                    <h3>Create Account</h3>
                    <fieldset>
                      <label htmlFor="name">Name</label>
                      <input type="name" name="name" id="name" placeholder="Your Name..." autoComplete="on" required />
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="text"
                        name="email"
                        id="email"
                        pattern="[^ @]*@[^ @]*"
                        placeholder="Your E-mail..."
                        required
                      />
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <label htmlFor="subject">Password</label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password..."
                        autoComplete="on"
                      />
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <label htmlFor="subject">Password Confirmation</label>
                      <input
                        type="password"
                        name="password_confirmation"
                        id="password_confirmation"
                        placeholder="Password Confirmation..."
                        autoComplete="on"
                      />
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <button type="submit" id="form-submit" className="orange-button">
                        Sign Up
                      </button>
                    </fieldset>
                  </div>
                </div>
              </form>
            </div>

            <div className="col-lg-12">
              <div id="map"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
