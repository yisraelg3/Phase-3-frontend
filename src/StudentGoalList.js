import React, { Component } from 'react'
import StudentGoal from './StudentGoal'
import StudentGoalForm from './StudentGoalForm'

export default class StudentGoalList extends Component {

  render() {
    let arrOfStudentGoalList = this.props.students.map(StudentObj=>{
      return <StudentGoal key={StudentObj.id} StudentGoalObj={StudentObj.studentgoals} currentStudent={this.props.currentStudent}/>
    })

    // let arrOfGoalList = this.props.studentgoals.map(studentGoalObj=>{
    //   return <StudentGoal key={studentGoalObj.id} studentGoalObj={studentGoalObj}/>
    // })
    return (
      <div>
        <h2>Student Goals</h2>
        {arrOfStudentGoalList}
        {this.props.goals.length > 0 ? <StudentGoalForm goals={this.props.goals} currentStudent={this.props.currentStudent} addGoalToStudent={this.props.addGoalToStudent}/> : ''}
      </div>
    )
  }
}
