import React, { Component } from "react";

import "./NotFound.css";

export default class NotFound extends Component {
  render() {
    return (
      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404">
            <h1>
              4<span>0</span>4
            </h1>
          </div>
          <h2>the page you requested could not found</h2>
          <h3>
            <a target="blank" href="https://colorlib.com/">
              Template by Colorlib
            </a>
          </h3>
        </div>
      </div>
    );
  }
}
