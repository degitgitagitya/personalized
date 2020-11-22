import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { AuthContext } from '../Contexts/Authentication';

const StyledLevelList = styled.div`
  font-weight: 500;

  ${this}:hover {
    cursor: pointer;
    background-color: #444444 !important;
    color: white;
  }
`;

class FunctionLevel extends Component {
  static contextType = AuthContext;

  state = {
    listContent: [],
    listResult: [],
  };

  goToContent = (title, id) => {
    this.props.history.push(`/function-content?title=${title}&id=${id}`);
  };

  fetchLevel = () => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
    fetch(`${process.env.REACT_APP_API_URL}/function-content`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        this.setState({
          listContent: result.listContent,
        });
      })
      .catch((error) => console.log('error', error));
  };

  fetchResult = () => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      `${process.env.REACT_APP_API_URL}/function-content/answer/siswa/${this.context.data.id}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        this.setState({
          listResult: result.list_of_answer,
        });
      })
      .catch((error) => console.log('error', error));
  };

  componentDidMount() {
    this.fetchLevel();
    this.fetchResult();
  }

  render() {
    const { listContent, listResult } = this.state;
    return (
      <div className='mt-3'>
        <div
          className='alert alert-info mb-1 rounded-0'
          style={{ marginLeft: '0.6rem', marginRight: '0.6rem' }}
          role='alert'
        >
          <button
            onClick={() => {
              this.props.history.push(
                '/petunjuk-video?url=https://youtu.be/5beG--tD8aM'
              );
            }}
            className='btn btn-light'
          >
            <i className='fa fa-question-circle mr-2'></i> Petunjuk
          </button>
        </div>

        <div className='d-flex flex-wrap'>
          {listContent.map((data) => {
            let x = (
              <StyledLevelList
                key={data.id}
                onClick={() => {
                  this.goToContent(data.name, data.id);
                }}
                style={{ margin: '10px' }}
                className='bg-white shadow-sm p-3'
              >
                {data.name}
              </StyledLevelList>
            );

            listResult.forEach((element) => {
              if (data.id === element.id_function_content) {
                x = (
                  <StyledLevelList
                    key={data.id}
                    onClick={() => {
                      this.goToContent(data.name, data.id);
                    }}
                    style={{ margin: '10px' }}
                    className='bg-success text-white shadow-sm p-3'
                  >
                    {data.name}
                  </StyledLevelList>
                );
              }
            });
            return x;
          })}
        </div>
      </div>
    );
  }
}

export default withRouter(FunctionLevel);
