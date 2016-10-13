import React from 'react'
import Course from './course'
import { courses } from '../data/courses'

const CourseList = React.createClass({
  render() {
    const listCourses = courses.map((course) => {
      return <Course key={course.id} removeCourse={this.props.removeCourse} addCourse={this.props.addCourse} courseObj={course} />
    })
    return (
      <div className='course-container col-md-3'>
        <h1>Course List</h1>
        <ul className='list-group'>
          {listCourses}
        </ul>

      </div>
    )
  }
})

export default CourseList
