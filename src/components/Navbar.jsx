import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../imgs/logo2.png'
import ReactDOM from "react-dom/client";
import { Link } from 'react-router-dom';

export default class Navbar extends React.Component {
  state = {};

  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{marginLeft: "0%", /* boxShadow: "0px 0px 40px 40px gray" */}}>
      <div className="container-fluid">
        <img src={logo} alt="Logo" width="200px" height="auto" className="d-inline-block align-text-top" />
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav" style={{ marginLeft: "65%" }}>
          <ul className="navbar-nav">
            <li className="nav-item">
            <Link className="nav-link" to="/"><i class="bi bi-house-door"></i>  Home</Link>
            </li>
            <li className="nav-item" style={{ borderLeft: "solid 1px #3e6906" }}>
            <Link className="nav-link" to="/catalogo">Catalog</Link>
              </li>
            <li className="nav-item" style={{ borderLeft: "solid 1px #3e6906" }}>
              <Link className="nav-link" to="/login">Log in</Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
    );
  }
}
