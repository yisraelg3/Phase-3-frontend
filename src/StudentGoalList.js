import React, { Component } from 'react'
import StudentGoal from './StudentGoal'

export default class StudentGoalList extends Component {

  render() {
    let arrOfStudentGoalList = this.props.students.map(StudentObj=>{
      return <StudentGoal key={StudentObj.id} StudentGoalObj={StudentObj.studentgoals}/>
    })
    return (
      <div>
        <h2>Student Goals</h2>
        {arrOfStudentGoalList}
        
      </div>
    )
  }
}
