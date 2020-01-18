/* eslint-disable no-constant-condition */
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { client } from '../../Client';

class Login extends Component {
  state = {
    loginInProgress: false,
    shouldRedirect: false
  };

  performLogin() {
    this.setState({ loginInProgress: true });
    client.login().then(() => (
        this.setState({
          shouldRedirect: true
        })
    ));
  }

  render() {
    if ('todo') {
      return (
        'todo'
      );
    } else {
      return (
        <div className='ui one column centered grid'>
          <div className='ten wide column'>
            <div
              className='ui raised very padded text container segment'
              style={{ textAlign: 'center' }}
            >
              <h2 className='ui green header'>
                Fullstack Music
              </h2>
              {
                /* todo */
              }
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Login;
