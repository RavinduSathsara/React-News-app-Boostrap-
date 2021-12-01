import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const AppNavBar = (props) => {
  const [active, setActive] = useState(null);

  return (
    <div>
      <nav
        className={
          props.theme === 0
            ? "navbar navbar-expand-lg navbar-light bg-light "
            : "navbar navbar-expand-lg navbar-dark bg-dark "
        }
      >
        <div className="container-fluid fw-bold ">
          <Link className="navbar-brand   m-2" to="#">
            News App
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <Link
                onClick={() => setActive(1)}
                className={
                  active === 1 ? "nav-link active text-primary " : "nav-link  "
                }
                aria-current="page"
                to="/"
              >
                Home
              </Link>
              <Link
                onClick={() => setActive(2)}
                className={
                  active === 2 ? "nav-link active  text-primary" : "nav-link  "
                }
                to="/features"
              >
                Features
              </Link>
              <Link
                onClick={() => setActive(3)}
                className={
                  active === 3 ? "nav-link active  text-primary" : "nav-link  "
                }
                to="register"
              >
                Register today
              </Link>
              <Link
                onClick={() => setActive(4)}
                className={
                  active === 4 ? "nav-link active  text-primary" : "nav-link  "
                }
                to="signin"
              >
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default AppNavBar;
