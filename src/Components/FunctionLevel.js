import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

const StyledLevelList = styled.div`
  font-weight: 500;

  ${this}:hover {
    cursor: pointer;
    background-color: #444444 !important;
    color: white;
  }
`;

class FunctionLevel extends Component {
  state = {
    listContent: [],
  };

  goToContent = (title, id) => {
    this.props.history.push(`/function-content?title=${title}&id=${id}`);
  };

  componentDidMount() {
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
  }

  render() {
    const { listContent } = this.state;
    return (
      <div>
        <div className='d-flex flex-wrap'>
          {listContent.map((data) => {
            return (
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
          })}
        </div>
      </div>
    );
  }
}

export default withRouter(FunctionLevel);
