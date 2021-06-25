import React, { Component } from 'react'
import StudentGoal from './StudentGoal'
import { Link, withRouter } from'react-router-dom'
// import StudentGoalForm from './StudentGoalForm'

class StudentGoalList extends Component {

  render() {
    if (this.props.students.length === 0) {
      this.props.history.push('/')
    }
    // console.log(this.props)
    let arrOfStudentGoalList = this.props.students.map(StudentObj=>{
      return <StudentGoal key={StudentObj.id} StudentGoalObj={StudentObj.studentgoals} currentStudent={this.props.currentStudent}/>
    })

    return (
      <div>
        <h2>Student Goals</h2>
        <Link to='/'>Home</Link><br/><br/>
        <Link to='/newstudentgoal'>+ Add new Goal</Link>
        {arrOfStudentGoalList}
      </div>
    )
  }
}
export default withRouter(StudentGoalList)