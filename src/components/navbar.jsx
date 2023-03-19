import React, { Component } from "react";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "./body_main.css";

class NavBarsub extends Component {
  state = {};
  render() {
    return (
      <div className="menu">
      <div className="container flex">
        <div className="mobile-btn">
          <ion-icon name="grid"></ion-icon>
        </div>
        <div className="logo">
          <img
            src="RLS-Logo-White.png"
            alt=""
          />
        </div>

        <ul className="nav">
          <li className="nav-item"><a href="#">Home</a></li>
          <li className="nav-item"><a href="#why-us">Features</a></li>
          <li className="nav-item"><a href="#explore">Explore</a></li>
          <li className="nav-item"><a href="#discount">Register</a></li>
        </ul>

        <a href="#" className="btn-reg">Register</a>
      </div>
    </div>
    );
  }
}

export default NavBarsub;
