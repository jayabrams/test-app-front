import React, { Component } from 'react';
import CreateEventForm from './CreateEventForm.jsx'; 

class NewEvent extends Component {
  render() {
    return (
      <div className=""> 
        <div className="col-md-5 col-xs-12"> 
          <div className="white-background" >
            <div className="">
              <h3 className="text-center"><strong>enter someinfo</strong> </h3>
              <CreateEventForm /> 
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewEvent;
