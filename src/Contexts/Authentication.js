import React, { createContext, Component } from 'react';

export const AuthContext = createContext();

export default class Authentication extends Component {
  state = {
    // isAuth: true,
    // data: {
    //   email: 'toto@gmail.com',
    //   id: 2,
    //   id_gaya_belajar: 1,
    //   id_kelas: '4',
    //   nama: 'Toto Karnavian',
    //   password: 'password',
    // },
    isAuth: false,
    data: [],
  };

  changeAuthToFalse = () => {
    this.setState({
      isAuth: false,
      data: [],
    });
  };

  changeAuthToTrue = (data) => {
    this.setState({
      isAuth: true,
      data: data,
    });
  };

  render() {
    return (
      <AuthContext.Provider
        value={{
          ...this.state,
          changeAuthToFalse: this.changeAuthToFalse,
          changeAuthToTrue: this.changeAuthToTrue,
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}
