import React, { Component } from 'react'

export default class StudentGoal extends Component {
  state = {
    star: this.props.star
  }


addStar = () => {
  this.setState({
    star: this.state.star + 1
  })
}

  render() {
    let filteredStudentGoal = this.props.StudentGoalObj.filter(goal=> {
      return goal.student_id === this.props.currentStudent.id})
    

    let arrOfStudentGoals = filteredStudentGoal.map(studentGoal=>{
      return (
      <div key={studentGoal.id} className="ui black button" onClick={this.addStar}>
          <p >Goal Title: {studentGoal.goal_title}</p>
          <i className="yellow star icon"></i> star: {this.state.star}
        </div>)
    })
    
    
    return (
      <div>
        {arrOfStudentGoals}
      </div>
    )
  }
}
