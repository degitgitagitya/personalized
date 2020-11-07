import React, { Component } from 'react';
// import ReactPlayer from "react-player";
import NavBar from '../Components/NavBar';
import PageTitle from '../Components/PageTitle';

export default class SubMateri extends Component {
  state = {
    subMateri: {},
  };

  fetchSubMateri = () => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    const search = this.props.location.search;
    const params = new URLSearchParams(search);
    const idSubMateri = params.get('id_sub_materi');

    fetch(`http://127.0.0.1:5000/submateri/id/${idSubMateri}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        this.setState({
          subMateri: result,
        });
      })
      .catch((error) => console.log('error', error));
  };

  componentDidMount() {
    this.fetchSubMateri();
  }

  render() {
    return (
      <div>
        <NavBar></NavBar>
        <PageTitle title={this.state.subMateri.nama}></PageTitle>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-12 text-center'>
              {/* <ReactPlayer
                url={this.state.subMateri.url}
                width="100%"
                controls={true}
              /> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
