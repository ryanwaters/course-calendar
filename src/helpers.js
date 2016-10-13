// helper methods

const Helpers = {
  parseTime(timeArray) {
    if (timeArray.length == 0) {
      return
    }
    return `${timeArray[0]} - ${timeArray[1]}`
  },
  parseDays(days) {
    if (days.length == 1) {
      return `${days}`
    } else if (days.length == 3){
      return `${days[0]} - ${days[1]} - ${days[2]}`
    }
    return `${days[0]} - ${days[1]}`
  }

}

export default Helpers
