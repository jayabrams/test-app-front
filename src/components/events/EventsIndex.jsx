import React, { Component } from 'react';
//import * as actions from '../../actions'; 
import * as actions from '../../actions'
import {connect} from 'react-redux'; 
//import {Link} from 'react-router'; 
import SingleEventBox from './SingleEventBox.jsx'; 


class EventsIndex extends Component {

  componentWillMount(){
    this.props.fetchEvents(); 
  }

  renderEvents(){
    return this.props.events.map(event => {
      const {id,title,caption} = event; 
      return(
        <SingleEventBox key={id} title={title} caption={caption}  /> 
        
      )
    }); 
  }

  render() {
    return (
      <div> 
        <div className="container"> 
          <div className="row"> 
            <div className="white-background">
            </div>
          </div>
        </div>
        <div className="container"> 
          <div className="row"> 
            <div className="col-md-8 white-background inner">
              <h3> List all posts</h3> 
              <hr></hr>
              <div className=""> 
                {this.renderEvents()}
              </div>
            </div>
          </div> 
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {events: state.events.all}
}

export default connect(mapStateToProps, actions)(EventsIndex);








