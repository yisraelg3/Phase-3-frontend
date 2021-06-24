import React, { Component } from 'react'

export default class StudentGoal extends Component {
  render() {
    let arrOfStudentGoals = this.props.StudentGoalObj.map(studentGoal=>{
      return <p key={studentGoal.id}>Goal Title: {studentGoal.goal_title}</p>
    })
    return (
      <div>
        {/* <p>Goal Title: {this.props.StudentgoalObj.goal_title}</p> */}
        {/* <p>Goal Title: {this.props.StudentGoalObj.goal_title}</p> */}
        {arrOfStudentGoals}
      </div>
    )
  }
}
