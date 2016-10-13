import React from 'react'
import Helpers from '../helpers'

const Day = React.createClass({
  checkTimeConflicts(timeArray) {
    if (timeArray.length == 0){
      return
    }

    const startArray = timeArray.map((arr) => arr[0]).sort()
    const endArray = timeArray.map((arr) => arr[1]).sort()

    for (let i = 0; i < startArray.length; i++){
      if (startArray.length < 2) {
        return false
      }
      if (startArray[i + 1] > endArray[i]) {
        return false
      } else {
        return true
      }
    }
  },

  render() {
    const day = this.props.dayObj
    const courseName = day.name.map((name, index) => {
      return <div className='list-group-item-heading'>{name}<div className='list-group-item-text'>{Helpers.parseTime(day.times[index])}</div></div>
    })

    let classes = 'list-group-item'
    if (this.checkTimeConflicts(day.timeIndex)) {
      classes = classes + ' list-group-item-danger'
    }
    return (
      <div className='list-group'>
        <div className={classes}>{courseName}</div>
      </div>
    )
  }
})

export default Day
