import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
export function Login(props) {
  const navigate = useNavigate();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onLogin(params);
    navigate("/");
  };

  return (
    <div id="login">
      <div className="contact-page section">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="section-heading"></div>
              <div className="row"></div>
            </div>
            <div className="col-lg-6">
              <form id="contact-form" action="" method="post" onSubmit={handleFormSubmit}>
                <div className="row">
                  <h3>Login</h3>
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
                      <button type="submit" id="form-submit" className="orange-button">
                        Login
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
