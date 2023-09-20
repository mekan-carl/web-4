import logo from "../../assets/web3-LOGO.png";
import "./Navbar.css";

function NavbarBS() {
  return (
    <nav className="navbar navbar-expand-lg bg-white">
      <div className="container-fluid">
        <a className="navbar-brand" href="https://www.w3schools.com/">
          <img src={logo} style={{ height: "40px", marginRight: "-15px" }} />
        </a>
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="toggler-icon top-bar"></span>
          <span className="toggler-icon middle-bar"></span>
          <span className="toggler-icon bottom-bar"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto ">
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.w3schools.com/"
                style={{ color: "black" }}
              >
                Learn to code
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://campus.w3schools.com/collections/certifications"
                style={{ color: "black" }}
              >
                Exams
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://campus.w3schools.com/collections/course-catalog"
                style={{ color: "black" }}
              >
                Courses
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.w3schools.com/spaces/index.php"
                style={{ color: "black" }}
              >
                Create Website
              </a>
            </li>
          </ul>
          <div className="nav-buttons d-flex align-items-center ">
            <li className="nav-item login" style={{ listStyle: "none" }}>
              <a
                className="nav-link "
                href="https://profile.w3schools.com/login"
              >
                Log in
              </a>
            </li>
            <a href="https://www.w3schools.com/signup/index.php">
              <button className="Btn-getStarted">Get Started</button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavbarBS;
