import React from 'react'
import Calendar from './calendar'
import CourseList from './course-list'

const Main = React.createClass({
  getInitialState() {
    return {
      courses: {}
    }
  },
  addCourse(course) {
    this.state.courses[`course-${course.id}`] = course
    this.setState({courses: this.state.courses})
  },
  removeCourse(courseId) {
    let courseState = this.state.courses
    if (courseState[`course-${courseId}`]){
      delete courseState[`course-${courseId}`]
    }
    this.setState({courses: courseState})
  },
  render(){
    return(
      <div className='container row'>
        <CourseList  addCourse={this.addCourse} removeCourse={this.removeCourse}/>
        <Calendar  title={this.props.params.calendarId} selectedCourses={this.state.courses}/>
      </div>
    )
  }
})

export default Main
