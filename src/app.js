import './styles/app.scss'
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// import components
import Main from './components/main'
import CalendarName from './components/calendar-name'

const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={CalendarName}/>
    <Route path='/calendar/:calendarId' component={Main}/>
  </Router>

)

render(routes, document.getElementById('root'))
