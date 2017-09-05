import React from 'react';
import Loading from 'components/Form/InputLogin/loading';

const Button = (props) => (
  <div className="form-group">
    <button type="submit" className="btn btn-default" disabled={props.disable ? true : false}>Login</button>
    {props.loading ? <Loading /> : null}
  </div >
);
export default Button;
