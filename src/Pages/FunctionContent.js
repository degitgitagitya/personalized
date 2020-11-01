import React, { Component } from 'react';
import NavBar from '../Components/NavBar';
import PageTitle from '../Components/PageTitle';
import styled from 'styled-components';
import parse from 'html-react-parser';
import { withRouter } from 'react-router-dom';
import { AuthContext } from '../Contexts/Authentication';

const HoverButton = styled.div`
  ${this}:hover {
    background-color: #cecece !important;
    cursor: pointer;
  }
`;

const QuestionComponent = (props) => {
  let Html = ``;
  let source = props.question;
  if (props.target !== 'question') {
    source = props.answer;
  }
  source.forEach((data, index) => {
    if (index % 4 === 0) {
      Html = Html + `<div class='d-flex justify-content-center mb-3'>`;
    }
    if (index % 4 === 3) {
      if (data === 1) {
        if (index === props.start) {
          Html = Html + `<i class='fa fa-circle text-success fa-2x'></i>`;
        } else {
          Html = Html + `<i class='fa fa-circle text-danger fa-2x'></i>`;
        }
        Html = Html + `</div>`;
      } else {
        Html = Html + `<i class='fa fa-circle fa-2x'></i>`;
        Html = Html + `</div>`;
      }
    } else {
      if (data === 1) {
        if (index === props.start) {
          Html = Html + `<i class='fa fa-circle text-success fa-2x mr-3'></i>`;
        } else {
          Html = Html + `<i class='fa fa-circle text-danger fa-2x mr-3'></i>`;
        }
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
  static contextType = AuthContext;

  state = {
    id: 0,
    title: '',
    userAnswer: [],
    functionList: [],
    isFunction: false,
    question: [],
    answer: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    start: 0,
  };

  fetchQuestion = (id) => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      `${process.env.REACT_APP_API_URL}/function-content/${id}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        const question = result.question.split(',');
        let final = [];
        question.forEach((data) => {
          final.push(parseInt(data));
        });
        this.setState({
          title: result.name,
          question: final,
          start: result.start,
          id: result.id,
        });
      })
      .catch((error) => console.log('error', error));
  };

  componentDidMount() {
    const search = this.props.location.search;
    const params = new URLSearchParams(search);
    const id = params.get('id');
    this.fetchQuestion(id);
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

  submitAnswer = () => {
    const { userAnswer, answer, functionList, start, question } = this.state;
    let tempAnswer = answer;
    tempAnswer[start] = 1;
    let pivot = start;
    userAnswer.forEach((data) => {
      if (data === 'function') {
        functionList.forEach((element) => {
          if (element === 'left') {
            pivot = pivot - 1;
          } else if (element === 'right') {
            pivot = pivot + 1;
          } else if (element === 'up') {
            pivot = pivot - 4;
          } else if (element === 'down') {
            pivot = pivot + 4;
          }
          tempAnswer[pivot] = 1;
        });
      } else {
        if (data === 'left') {
          pivot = pivot - 1;
        } else if (data === 'right') {
          pivot = pivot + 1;
        } else if (data === 'up') {
          pivot = pivot - 4;
        } else if (data === 'down') {
          pivot = pivot + 4;
        }
        tempAnswer[pivot] = 1;
      }
    });
    let status = 0;
    if (JSON.stringify(tempAnswer) === JSON.stringify(question)) {
      status = 1;
    }
    this.postAnswer(status, answer);
  };

  postAnswer = (status, answer) => {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    let tempAnswer = JSON.stringify(answer);
    tempAnswer = tempAnswer.replace('[', '');
    tempAnswer = tempAnswer.replace(']', '');
    const raw = JSON.stringify({
      id_function_content: this.state.id,
      id_siswa: this.context.data.id,
      status: status,
      answer: tempAnswer,
    });
    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };
    fetch(
      `${process.env.REACT_APP_API_URL}/function-content/answer`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error));
  };

  render() {
    const {
      title,
      userAnswer,
      functionList,
      isFunction,
      question,
      answer,
      start,
    } = this.state;
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
                    <QuestionComponent
                      start={start}
                      answer={answer}
                      question={question}
                      target='question'
                    />
                  </div>
                  <div className='col-6'>
                    <QuestionComponent
                      start={start}
                      answer={answer}
                      question={question}
                      target='answer'
                    />
                  </div>
                </div>

                <hr />
                <div className='d-flex justify-content-end mt-3'>
                  <HoverButton
                    onClick={this.submitAnswer}
                    className='bg-white rounded-circle p-3 d-flex align-items-center justify-content-center shadow-sm border border-light'
                  >
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
