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
  goToContent = (title) => {
    this.props.history.push(`/function-content?title=${title}`);
  };

  render() {
    return (
      <div>
        <div className='d-flex flex-wrap'>
          <StyledLevelList
            onClick={() => {
              this.goToContent('Level 1');
            }}
            style={{ margin: '10px' }}
            className='bg-white shadow-sm p-3'
          >
            Level 1
          </StyledLevelList>
        </div>
      </div>
    );
  }
}

export default withRouter(FunctionLevel);
