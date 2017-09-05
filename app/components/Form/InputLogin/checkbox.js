import React from 'react';

const Checkbox = (props) => (
  <div className="checkbox">
    <label>
      <input type="checkbox" name="checkbox"
        onChange={props.handleOnchange}
        checked={props.check ? 'checked' : null}
      /> Remember me
            </label>
  </div>
);
export default Checkbox;
