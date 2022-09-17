import { Link } from "react-router-dom";
import "./footer.css";

function Footer() {
  return (
    <>
      <link rel="stylesheet" href="style.css" />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
      />
      <footer class="footer">
        <div class="container">
          <div class="row">
            <div class="footer-col">
              <h4>INFO.</h4>
              <ul>
                <li>
                  <a href="#">about us</a>
                </li>
                <li>
                  <a href="#">our services</a>
                </li>
                <li>
                  <a href="#">privacy policy</a>
                </li>
                <li>
                  <a href="#">affiliate program</a>
                </li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>RESSOURCES</h4>
              <ul>
                <li>
                  <a href="#">Monitoring Grader</a>
                </li>
                <li>
                  <a href="#">Video Tutorial</a>
                </li>
                <li>
                  <a href="#">Term &amp; Service</a>
                </li>
                <li>
                  <a href="#">Project API</a>
                </li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>HELP</h4>
              <ul>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Sign Up</a>
                </li>
                <li>
                  <Link to="./login">Login</Link>
                </li>
                <li>
                  <a href="#">Terms of Services</a>
                </li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>FOLLOW US</h4>
              <div class="social-links">
                <a href="#">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="#">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
