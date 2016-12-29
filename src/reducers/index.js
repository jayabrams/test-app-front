import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import { routerReducer as routing } from 'react-router-redux';
import EventsReducer from './eventsReducer'; 

const allReducers = combineReducers({
  routing, 
  form: formReducer,
  events: EventsReducer,
});

export default allReducers
