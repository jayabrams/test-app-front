import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './App';
import NewEvent from './components/events/NewEvent.jsx';
import EventsIndex from './components/events/EventsIndex.jsx';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={EventsIndex} /> 
    <Route path="/events/new" component={NewEvent} />
  </Route>
); 
