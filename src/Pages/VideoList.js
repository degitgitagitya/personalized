import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

const VideoCard = (props) => {
  return (
    <div className='bg-white shadow-sm p-3 m-1' style={{ width: '24%' }}>
      <button
        className='btn btn-info w-100'
        onClick={() => {
          props.history.push(`/video-player?url=${props.url}`);
        }}
      >
        Mulai
      </button>
      <hr />
      <h5>{props.title}</h5>
      <hr />
      <p>{props.description}</p>
    </div>
  );
};

class VideoList extends Component {
  state = {
    videoList: [],
  };

  setVideoList = (videoList) => {
    this.setState({
      videoList: videoList,
    });
  };

  componentDidMount() {
    this.fetchVideo();
  }

  fetchVideo = () => {
    const { setVideoList } = this;
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
    fetch(`${process.env.REACT_APP_API_URL}/video/`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setVideoList(result.list_of_video);
      })
      .catch((error) => console.log('error', error));
  };

  render() {
    const { videoList } = this.state;
    return (
      <div className='d-flex'>
        {videoList.length !== 0
          ? videoList.map((data, index) => {
              return (
                <VideoCard
                  key={index}
                  id={data.id}
                  title={data.title}
                  description={data.description}
                  history={this.props.history}
                  url={data.url}
                />
              );
            })
          : ''}
      </div>
    );
  }
}

export default withRouter(VideoList);
