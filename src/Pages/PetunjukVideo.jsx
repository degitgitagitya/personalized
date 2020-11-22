import React, { Component } from 'react';
import NavBar from '../Components/NavBar';
import PageTitle from '../Components/PageTitle';
import ReactPlayer from 'react-player/youtube';

export default class PetunjukVideo extends Component {
  state = {
    url: '',
  };

  componentDidMount() {
    const search = this.props.location.search;
    const params = new URLSearchParams(search);
    const url = params.get('url');

    this.setState({
      url: url,
    });
  }

  render() {
    const { url } = this.state;
    return (
      <>
        <NavBar></NavBar>
        <PageTitle title={'Petunjuk'}></PageTitle>
        <div className='container'>
          <div className='bg-white shadow-sm p-3 d-flex justify-content-center'>
            <ReactPlayer controls={true} url={url} />
          </div>
        </div>
      </>
    );
  }
}
