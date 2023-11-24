import { Navbar } from "react-bootstrap";
import Logo from "../assets/Logo.png";
const navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <Navbar>
            <Navbar.Brand>
              <img
                src={Logo}
                width="50px"
                height="50"
                className="d-inline-block align-top"
                alt="logo"
              />
               
            </Navbar.Brand>
          </Navbar>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
              <a className="nav-link" href="Contact">
                Signup
              </a>
              <a className="nav-link" href="About">
                Login
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default navbar;
