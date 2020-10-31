import React, { Component } from 'react';
import NavBar from '../Components/NavBar';
import PageTitle from '../Components/PageTitle';
import styled from 'styled-components';
import parse from 'html-react-parser';
import { withRouter } from 'react-router-dom';

const HoverButton = styled.div`
  ${this}:hover {
    background-color: #cecece !important;
    cursor: pointer;
  }
`;

const Question = [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const Answer = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

const QuestionComponent = (props) => {
  let Html = ``;

  let source = Question;
  if (props.target !== 'question') {
    source = Answer;
  }

  source.forEach((data, index) => {
    if (index % 4 === 0) {
      Html = Html + `<div class='d-flex justify-content-center mb-3'>`;
    }
    if (index % 4 === 3) {
      if (data === 1) {
        Html = Html + `<i class='fa fa-circle text-danger fa-2x'></i>`;
        Html = Html + `</div>`;
      } else {
        Html = Html + `<i class='fa fa-circle fa-2x'></i>`;
        Html = Html + `</div>`;
      }
    } else {
      if (data === 1) {
        Html = Html + `<i class='fa fa-circle text-danger fa-2x mr-3'></i>`;
      } else {
        Html = Html + `<i class='fa fa-circle fa-2x mr-3'></i>`;
      }
    }
  });
  return parse(`<div>` + Html + `</div>`);
};

const ClickAble = (props) => {
  const addAnswer = (answer) => {
    props.setAnswer(answer);
  };

  const changeTarget = () => {
    props.toggleIsFunction();
  };

  return (
    <div className='d-flex justify-content-between'>
      <div className='d-flex align-items-center'>
        <HoverButton
          onClick={() => {
            addAnswer('up');
          }}
          className='bg-white rounded-circle p-2 d-flex align-items-center justify-content-center shadow-sm border border-light mr-3'
        >
          <i
            className='fa fa-arrow-up text-dark'
            style={{ fontSize: '1.3rem' }}
          ></i>
        </HoverButton>
        <HoverButton
          onClick={() => {
            addAnswer('down');
          }}
          className='bg-white rounded-circle p-2 d-flex align-items-center justify-content-center shadow-sm border border-light mr-3'
        >
          <i
            className='fa fa-arrow-down text-dark'
            style={{ fontSize: '1.3rem' }}
          ></i>
        </HoverButton>
        <HoverButton
          onClick={() => {
            addAnswer('right');
          }}
          className='bg-white rounded-circle p-2 d-flex align-items-center justify-content-center shadow-sm border border-light mr-3'
        >
          <i
            className='fa fa-arrow-right text-dark'
            style={{ fontSize: '1.3rem' }}
          ></i>
        </HoverButton>
        <HoverButton
          onClick={() => {
            addAnswer('left');
          }}
          className='bg-white rounded-circle p-2 d-flex align-items-center justify-content-center shadow-sm border border-light mr-3'
        >
          <i
            className='fa fa-arrow-left text-dark'
            style={{ fontSize: '1.3rem' }}
          ></i>
        </HoverButton>
        <div className='mr-2'>Target</div>
        {props.isFunction ? (
          <button onClick={changeTarget} className='btn btn-info'>
            Fungsi
          </button>
        ) : (
          <button onClick={changeTarget} className='btn btn-success'>
            Jawaban
          </button>
        )}
      </div>
      <div>
        <HoverButton
          onClick={() => {
            addAnswer('function');
          }}
          className='bg-white rounded-circle p-2 d-flex align-items-center justify-content-center shadow-sm border border-light'
        >
          <div
            style={{ fontSize: '1.3rem', fontWeight: '500', width: '2rem' }}
            className='d-flex justify-content-center'
          >{`{ }`}</div>
        </HoverButton>
      </div>
    </div>
  );
};

class FunctionContent extends Component {
  state = {
    title: '',
    userAnswer: [],
    functionList: [],
    isFunction: false,
  };

  componentDidMount() {
    const search = this.props.location.search;
    const params = new URLSearchParams(search);
    const title = params.get('title');
    this.setState({
      title: title,
    });
  }

  setAnswer = (answer) => {
    const { userAnswer, functionList } = this.state;
    if (this.state.isFunction === true && answer !== 'function') {
      let newFunctionList = functionList;
      newFunctionList.push(answer);
      this.setState({
        functionList: newFunctionList,
      });
    } else {
      let newAnswer = userAnswer;
      newAnswer.push(answer);
      this.setState({
        userAnswer: newAnswer,
      });
    }
  };

  toggleIsFunction = () => {
    this.setState({
      isFunction: !this.state.isFunction,
    });
  };

  render() {
    const { title, userAnswer, functionList, isFunction } = this.state;
    console.log(this.state.userAnswer);
    return (
      <div>
        <NavBar></NavBar>
        <PageTitle title={title}></PageTitle>
        <div className='container'>
          <div className='bg-white shadow-sm p-3'>
            <div className='d-flex'>
              <HoverButton
                onClick={() => {
                  this.props.history.goBack();
                }}
                className='bg-white rounded-circle p-2 d-flex align-items-center justify-content-center shadow-sm border border-light'
              >
                <i
                  className='fa fa-arrow-left'
                  style={{ fontSize: '1.3rem' }}
                ></i>
              </HoverButton>
            </div>
            <hr />
            <div className='row'>
              <div className='col-10'>
                <div className='row'>
                  <div className='col-6'>
                    <QuestionComponent target='question' />
                  </div>
                  <div className='col-6'>
                    <QuestionComponent target='answer' />
                  </div>
                </div>

                <hr />
                <div className='d-flex justify-content-end mt-3'>
                  <HoverButton className='bg-white rounded-circle p-3 d-flex align-items-center justify-content-center shadow-sm border border-light'>
                    <i className='fa fa-play text-dark'></i>
                  </HoverButton>
                </div>

                <hr />
                <ClickAble
                  isFunction={isFunction}
                  toggleIsFunction={this.toggleIsFunction}
                  setAnswer={this.setAnswer}
                />
              </div>
              <div className='col-2 border-left border-dark'>
                <button
                  onClick={() => {
                    this.setState({
                      functionList: [],
                      userAnswer: [],
                    });
                  }}
                  className='btn btn-warning form-control'
                >
                  Clear
                </button>
                <hr />
                {userAnswer.map((data, index) => {
                  return (
                    <div
                      className='d-flex justify-content-center mb-2'
                      key={index}
                    >
                      <div className='bg-white rounded-circle p-2 d-flex align-items-center justify-content-center shadow-sm border border-light'>
                        {data !== 'function' ? (
                          <i className={`fa fa-arrow-${data}`}></i>
                        ) : (
                          <div
                            style={{
                              fontSize: '1.3rem',
                              fontWeight: '500',
                              width: '2rem',
                            }}
                            className='d-flex justify-content-center'
                          >{`{ }`}</div>
                        )}
                      </div>
                    </div>
                  );
                })}

                <hr />
                <h5>Fungsi</h5>
                <hr />
                {functionList.map((data, index) => {
                  return (
                    <div
                      className='d-flex justify-content-center mb-2'
                      key={index}
                    >
                      <div className='bg-white rounded-circle p-2 d-flex align-items-center justify-content-center shadow-sm border border-light'>
                        <i className={`fa fa-arrow-${data}`}></i>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(FunctionContent);
