/**
*
* Input
*
*/

import React from 'react';
// import styled from 'styled-components';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
import ErrorInput from 'components/ErrorInput';

function Input(props) {
  return (
    <div className={props.error ? 'form-group has-error' : 'form-group'}>
      <input
        onFocus={props.handleOnfocus}
        name={props.name}
        type={props.type}
        className="form-control"
        placeholder={props.placeholder}
      />
      {props.error ? <ErrorInput error={props.error} /> : null}
    </div>
  );
}

Input.propTypes = {

};

export default Input;
