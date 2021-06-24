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
      return <p key={studentGoal.id}>Goal Title: {studentGoal.goal_title}</p>
    })
    
    
    return (
      <div>
        {arrOfStudentGoals}
        <div class="ui black button" onClick={this.addStar}>
            <i class="yellow star icon"></i> star: {this.state.star}
        </div>
      </div>
    )
  }
}
