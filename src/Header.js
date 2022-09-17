import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <nav class="nvb navbar navbar-expand-sm navbar-light bg-light">
        <div class="container-fluid">
          <img
            class="navbar-brand"
            src="https://www.darshan.ac.in/Content/media/DU_Logo.svg"
            style={{ width: "150px" }}
          />
          <button
            type="button"
            class="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav ms-auto">
              <Link
                class="nav-item nav-link active"
                to="./"
                style={{ color: "rgb(0,0,0)" }}
              >
                Home
              </Link>
              <Link
                class="nav-item nav-link"
                to="./student"
                style={{ color: "rgba(0,0,0,.8)" }}
              >
                Student Details
              </Link>
              <Link
                class="nav-item nav-link"
                to="./student/add"
                style={{ color: "rgba(0,0,0,.8)" }}
              >
                Add Student
              </Link>
              <Link
                class="nav-item nav-link"
                to="./login"
                style={{ color: "rgba(0,0,0,1)" }}
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
