import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import routes from './routes.jsx'; 
import {Router, browserHistory} from 'react-router'; 
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'; 
import thunk from 'redux-thunk';
import allReducers from './reducers/index';
import injectTapEventPlugin from 'react-tap-event-plugin'; 
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
//import { syncHistoryWithStore } from 'react-router-redux';
injectTapEventPlugin(); 

const store = createStore(
  allReducers,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);

const muiTheme = getMuiTheme({
  palette: {
    primaryColor: '#F50057'
  }
})

ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>
  <Provider store={store} > 
  <Router history={browserHistory} routes={routes} /> 
  </Provider>
  </MuiThemeProvider>, 
  document.getElementById('root')
); 
