import React, { Component } from 'react'
import StudentGoal from './StudentGoal'
import StudentGoalForm from './StudentGoalForm'

export default class StudentGoalList extends Component {

  render() {
    let arrOfStudentGoalList = this.props.students.map(StudentObj=>{
      return <StudentGoal key={StudentObj.id} StudentGoalObj={StudentObj.studentgoals} currentStudent={this.props.currentStudent} star={this.props.star}/>
    })
    return (
      <div>
        <h2>Student Goals</h2>
        {arrOfStudentGoalList}
        <StudentGoalForm goals={this.props.goals} />
      </div>
    )
  }
}
