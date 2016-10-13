import React from 'react'
import CalendarName from './calendar-name'
import Day from './day'

const Calendar = React.createClass({
  parseCourses() {
    const courses = this.props.selectedCourses
    const courseKeys = Object.keys(courses);
    const dayIndex = () => ({name:[], timeIndex:[], times:[]})
    const week = {
      monday: dayIndex(),
      tuesday: dayIndex(),
      wednesday: dayIndex(),
      thursday: dayIndex(),
      friday: dayIndex()
    }
    const weekManipulator = (week, day, course) => {
      week[day].name.push(course.name)
      week[day].timeIndex.push(course.timeIndex)
      week[day].times.push(course.time)
    }
    for(let i = 0; i < courseKeys.length; i++){
      const course = courses[courseKeys[i]]
      for (const day of course.dayIndex) {
        if (day == 1){
          weekManipulator(week, 'monday', course)
        } else if (day == 2) {
          weekManipulator(week, 'tuesday', course)
        } else if (day == 3) {
          weekManipulator(week, 'wednesday', course)
        } else if (day == 4) {
          weekManipulator(week, 'thursday', course)
        } else if (day == 5) {
          weekManipulator(week, 'friday', course)
        }
      }
    }
    return week
  },
  render(){
    const week = this.parseCourses()
    return(
      <div>
        <div className='col'>
          <h1>{this.props.title}</h1>
          <div className='day col-lg-8'>Mon<Day dayObj={week.monday}/></div>
          <div className='day col-lg-8'>Tues<Day dayObj={week.tuesday}/></div>
          <div className='day col-lg-8'>Wed<Day dayObj={week.wednesday}/></div>
          <div className='day col-lg-8'>Thur<Day dayObj={week.thursday}/></div>
          <div className='day col-lg-8'>Friday<Day dayObj={week.friday}/></div>
        </div>
      </div>
    )
  }
})

export default Calendar
