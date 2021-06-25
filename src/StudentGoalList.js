import React, { Component } from 'react'
import StudentGoal from './StudentGoal'
import { Link, withRouter } from'react-router-dom'
import { Button } from 'semantic-ui-react'
// import StudentGoalForm from './StudentGoalForm'

class StudentGoalList extends Component {

  render() {
    if (this.props.students.length === 0) {
      this.props.history.push('/')
    }
    // console.log(this.props)
    let arrOfStudentGoalList = this.props.students.map(StudentObj=>{
      return (<StudentGoal 
        key={StudentObj.id} 
        StudentGoalObj={StudentObj.studentgoals} 
        currentStudent={this.props.currentStudent}
        addStar={this.props.addStar}
        deleteStudentGoalFromState={this.props.deleteStudentGoalFromState}
        />)
        
    })

    // let arrOfGoalList = this.props.goals.map(GoalObj=>{
    //   return (<StudentGoal key={GoalObj.id} GoalObj={GoalObj}/>)
    // })

    return (
      <div>
        <h2 style={{marginBottom: 50}}>Student Goals</h2>
        <h2>{this.props.currentStudent.name}</h2>
        <Link style={{color: 'black', fontSize: '14px', marginTop:5}} to='/home'>🏠 Home</Link><br/><br/>
        <Button color='black'><Link style={{fontSize: '14px', color: '#ffffff', marginBottom:10 }} to='/newstudentgoal'>+ Add new Goal</Link></Button>
        {arrOfStudentGoalList}
        {/* {arrOfGoalList} */}
      </div>
    )
  }
}
export default withRouter(StudentGoalList)