import secure_login from "../assets/secure_login.svg";
import apartment from "../assets/apartment.svg";
import building from "../assets/building.svg";

export default function Login() {
  return (
    <div className="container py-4">
      <div className="row g-0 align-items-center">
        <div className="col-lg-6 mb-5 mb-lg-0">
          <img
            src={apartment.src}
            className="w-100 rounded-4 shadow-4"
            alt=""
          />
        </div>
        <div className="col-lg-6 mb-5 mb-lg-0">
          <div className="card cascading-right backdrop-blur">
            <div className="card-body p-5">
              <h2 className="mb-5" style={{ fontWeight: "bold" }}>
                SIGN UP TO PRC
              </h2>
              <form>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input
                        type="text"
                        id="firstName"
                        className="form-control"
                      />
                      <label className="form-label small" htmlFor="firstName">
                        First name
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input
                        type="text"
                        id="lastName"
                        className="form-control"
                      />
                      <label className="form-label small" htmlFor="lastName">
                        Last name
                      </label>
                    </div>
                  </div>
                </div>

                <div className="form-outline mb-4">
                  <input type="email" id="email" className="form-control" />
                  <label className="form-label small" htmlFor="email">
                    Email address
                  </label>
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                  />
                  <label className="form-label small" htmlFor="password">
                    Password
                  </label>
                </div>

                <div className="form-check d-flex justify-content-center mb-4">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    value=""
                    id="agreement"
                    defaultChecked={true}
                  />
                  <label className="form-check-label" htmlFor="agreement">
                    I agree with the terms & conditions
                  </label>
                </div>
                <div
                  className="buttonDiv"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <button
                    type="submit"
                    className="btn btn-primary btn-block mb-4 me-4"
                  >
                    Sign up
                  </button>
                  <button
                    type="reset"
                    className="btn btn-secondary btn-block mb-4"
                  >
                    Reset
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
