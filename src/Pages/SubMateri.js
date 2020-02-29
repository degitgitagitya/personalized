import React, { Component } from "react";
import ReactPlayer from "react-player";
import NavBar from "../Components/NavBar";
import PageTitle from "../Components/PageTitle";

export default class SubMateri extends Component {
  render() {
    return (
      <div>
        <NavBar></NavBar>
        <PageTitle title={"Sub Materi 1"}></PageTitle>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 text-center">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                width="100%"
                controls={true}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
