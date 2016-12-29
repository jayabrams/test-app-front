import axios from 'axios'; 
import { 
  CREATE_EVENT,
//  CREATE_EVENT_FAILURE
} from '../types'; 
import { browserHistory } from 'react-router'; 
import {API_URL} from '../../config/constants'; 

export function createEvent(props){
  const request = axios.post(`${API_URL}/events`, props);
      browserHistory.push('/');  
  return (dispatch) => {
    request.then((data) => {
      dispatch({ type: CREATE_EVENT, payload: data })
    })
    .catch((error) => {
      console.log("Not created", error)
    })
  }; 
}
