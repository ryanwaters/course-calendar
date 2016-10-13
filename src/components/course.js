import React from 'react'
import Helpers from '../helpers'

const Course = React.createClass({
  addCourse() {
    const {id, dayIndex, timeIndex, name, time} = this.props.courseObj
    const courseData = { dayIndex, timeIndex, name, id, time }
    this.props.addCourse(courseData)
  },
  removeCourse() {
    this.props.removeCourse(this.props.courseObj.id)
  },
  render() {
    const course = this.props.courseObj
    return (
      <div>
        <li className='course list-group-item clearfix' id={course.id} dayIndex={course.dayIndex} timeIndex={course.timeIndex}>
          <div className='course-name'>{course.name}</div>
          <div className='course-time'>{Helpers.parseTime(course.time)}</div>
          <div className='course-days'>{Helpers.parseDays(course.days)}</div>
            <div className='pull-right' role='group'>
              <button type='button' className='btn btn-xs btn-success' onClick={this.addCourse}>&#x2713;</button>
              <button type='button' className='btn btn-xs btn-danger' onClick={this.removeCourse}>&#xff38;</button>
            </div>
        </li>
      </div>
    )
  }
})

export default Course
