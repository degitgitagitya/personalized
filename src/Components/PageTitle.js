import React, { Component } from "react";

import "./PageTitle.css";

export default class PageTitle extends Component {
  render() {
    return (
      <div className="container">
        <div className="page-title-title mt-md-5">
          {this.props.title}
          <div className="row justify-content-center">
            <div className="col-md-3">
              <hr className="page-title-hr" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
