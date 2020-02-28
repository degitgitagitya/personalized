import React, { Component } from "react";

import NavBar from "../Components/NavBar";
import NavLink from "../Components/NavLink";

import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="home-background">
        <NavBar></NavBar>
        <div className="container">
          <div className="row">
            <div className="col-md-7 home-title">
              Personalized Learning
              <div className="home-sub-title">
                <span className="home-sub-title-decor">Learn</span> by Your
                Style
              </div>
            </div>
            <div className="col-md-5">
              <i className="fas fa-book home-icon"></i>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2">
              <NavLink href="/login">
                <button className="btn home-button home-get-started">
                  Get Started
                </button>
              </NavLink>
            </div>
            <div className="col-md-2">
              <NavLink href="/login">
                <button className="btn home-button home-what-is">
                  What is PL
                </button>
              </NavLink>
            </div>
            <div className="col-md-2">
              <NavLink href="/login">
                <button className="btn home-button home-about">About Us</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
