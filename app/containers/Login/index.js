/*
 *
 * Login
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectLogin } from './selectors';
import Form from 'components/Form';
import { loginError, loginRequest, loginResetError } from './actions';
import Authentication from '../../utils/authentication';

export class Login extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {

    };
    this.onSubmit = (e) => {
      e.preventDefault();
      const { username, password } = e.target;
      const user = {
        username: username.value,
        password: password.value,
      };
      const { errors, hasError } = Authentication.validateInput(user);
      if (hasError) {
        this.props.dispatch(loginError(errors));
      } else {
        this.props.dispatch(loginRequest(user));
      }
    };
    this.handleOnfocus = (e) => {
      const inputName = e.target.name;
      this.props.dispatch(loginResetError(inputName));
    };
  }
  componentWillReceiveProps(nextProps) {
    const { isAuthenticated } = nextProps;
    if (isAuthenticated) {
      console.log(this.props);
    }
  }
  render() {
    return (
      <div className="login-page">
        <div className="login-left" >
          <div className="inventory">
            <h1>Skill inventory</h1>
          </div>
        </div>
        <div className="login-right">
          <Form
            onSubmit={this.onSubmit}
            handleOnfocus={this.handleOnfocus}
            error_user={this.props.Login.error_user}
            error_password={this.props.Login.error_password}
            disable={this.props.Login.disable}
            loading={this.props.Login.loading}
          />
        </div>
        <footer>
          <span className="copyright">Fsoft &copy;copyright</span>
        </footer>
      </div>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Login: makeSelectLogin(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
