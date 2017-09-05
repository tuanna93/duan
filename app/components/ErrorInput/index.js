/**
*
* ErrorInput
*
*/

import React, { PropTypes } from 'react';
// import styled from 'styled-components';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

function ErrorInput(props) {
  return (
    <span className="item-error">{props.error}</span>
  );
}

ErrorInput.propTypes = {
  error: PropTypes.string,
};

export default ErrorInput;
