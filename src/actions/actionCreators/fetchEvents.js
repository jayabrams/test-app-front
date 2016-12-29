import axios from 'axios'; 
import { 
  FETCH_EVENTS, 
  //  FETCH_EVENTS_FAILURE,
  //  FETCH_EVENTS_SUCCESS,
} from '../types'; 
import {API_URL} from '../../config/constants'; 

export function fetchEvents(){
  const request = axios.get(`${API_URL}/events`);
  return (dispatch) => {
    request.then(({data}) => {
      dispatch({ 
        type: FETCH_EVENTS,
        payload: data
      })
    }); 
  }; 
}
