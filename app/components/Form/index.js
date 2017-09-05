/**
*
* Form
*
*/

import React, { PropTypes } from 'react';
// import styled from 'styled-components';

import Input from 'components/Input';
import Button from './InputLogin/button';

class Form extends React.Component {
  render() {
    return (
      <div className="login-form">
        <h2>System login</h2>
        <form onSubmit={this.props.onSubmit}>
          <Input
            handleOnfocus={this.props.handleOnfocus}
            name="username"
            type="text"
            placeholder="Account/Email"
            error={this.props.error_user}
          />
          <Input
            handleOnfocus={this.props.handleOnfocus}
            name="password"
            type="password"
            placeholder="Password"
            error={this.props.error_password}
          />
          <Button
            disable={this.props.disable}
            loading={this.props.loading}
          />
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  handleOnfocus: PropTypes.func.isRequired,
  error_user: PropTypes.string,
  error_password: PropTypes.string,
  disable: PropTypes.bool,
  loading: PropTypes.bool,
};

export default Form;
