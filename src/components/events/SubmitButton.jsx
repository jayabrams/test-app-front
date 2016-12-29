import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 5,
};

const SubmitButton = () => (
  <div>
    <RaisedButton label="go"  style={style} type="submit" primary={true}    />
  </div>
);

export default SubmitButton;
