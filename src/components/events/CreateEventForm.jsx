import React, { Component} from 'react';
import {Field,reduxForm} from 'redux-form'; 
import * as actions from '../../actions'; 
//import {browserHistory} from 'react-router'; 
import TextField from 'material-ui/TextField'; 
import SubmitButton from './SubmitButton.jsx'; 
import RaisedButton from 'material-ui/RaisedButton';

const validate = values => {
  const errors = {}
  const requiredFields = [ 'title', 'caption' ]

  requiredFields.forEach( field => {
    if (!values[ field ] ){
      errors[field] = "Required"
    }
  })
  return errors; 
}

const renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => ( <TextField hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />
)

class CreateEventForm extends Component{

  handleFormSubmit(data){
    console.log(data); 
    actions.createEvent(data)
  }

  render(){
    const {handleSubmit, reset, pristine, submitting} = this.props; 
    return(
      <div className="">
        <div className="text-center">
          <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this)) }>
            <div>
              <Field name="title" component={renderTextField} label="text" floatingLabelText="Title"  /> 
            </div>
            <div>
              <Field name="caption" component={renderTextField} label="more text" floatingLabelText="Caption"/> 
            </div>

            <div>
              <SubmitButton disabled={pristine || submitting} /> 
              <br></br>

              <RaisedButton type="button" label="Clear" disabled={pristine || submitting} onClick={reset}/> 
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default reduxForm({
  form: 'CreateEventForm',
  validate
}, null, actions)(CreateEventForm);
