import React from 'react'
import { History } from 'react-router'

const CalendarName = React.createClass({
  mixins: [History],
  goToCalendar(event) {
    event.preventDefault()
    const calendarId = this.refs.calendarId.value
    this.history.pushState(null, `/calendar/${calendarId}`)

  },
  render(){
    return (
      <form className='calendar-name' onSubmit={this.goToCalendar}>
        <input type='text' ref='calendarId' className='form-control' placeholder='Name Your Calendar' required/>
        <input className='btn btn-default' type='submit' value='Enter'/>
      </form>
    )
  }
})

export default CalendarName
