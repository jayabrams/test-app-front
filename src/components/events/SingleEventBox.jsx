import React, { Component } from 'react';

class SingleEventBox extends Component {
  render(){
    return(
      <div>
        <div className="single-event-box col-md-12">
          <div className="clearfix content-heading">
            <div className="clearfix">  
              <h3>{this.props.title}</h3> 
              <p> {this.props.caption} </p> 
              lkasdf
            </div> 
          </div> 
        </div>
      </div>
    )
  }
}

export default SingleEventBox; 
