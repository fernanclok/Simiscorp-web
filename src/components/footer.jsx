import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
/* import logo from '../imgs/logo2.png' */
import face from '../imgs/face.png'
import insta from '../imgs/insta.png'
import youtube from '../imgs/youtube.png'

const redes = [
  {
    enlace1: "https://www.youtube.com/@DrGonzaloDiazUltrasound/videos",
    enlace2: "https://www.facebook.com/MedicinaApasionante",
    enlace3: "https://www.instagram.com/",
  }
];

export default class Navbar extends React.Component {
  state = {};

  render() {
    return (
      <footer style={{ marginBottom: "0px" }}>
        <div className="footer-content">
          <h3 className="texto">Simis Corp</h3>
          <p>Simis corp offers the exact number of shares to manipulate, manage and observe
            the information of an inventory of products for a pharmaceutical company.
          </p>
          <ul className="social-icons">
            {/* Use a React fragment or a div to wrap the returned li elements */}
            {redes.map((red, index) => (
              <React.Fragment key={index}>
                <li><a href={red.enlace2} className="icon" target="_blank"><i className="bi bi-facebook" id="imagenes" /></a></li>
                <li><a href={red.enlace3} className="icon" target="_blank"><i className="bi bi-instagram" id="imagenes" /></a></li>
                <li><a href={red.enlace1} className="icon" target="_blank"><i className="bi bi-youtube" id="imagenes" /></a></li>
              </React.Fragment>
            ))}
          </ul>
        </div>
        <div className="footer-credits">
          <p>Copyright&copy; 2008 - Page created as final project of the fifth quarter - its publication on the web is prohibited</p>
          <p>The elements and tools used in this project are merely for a university project</p>
        </div>
      </footer>
    );
  }
}
