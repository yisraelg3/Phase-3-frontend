import React, { Component } from 'react'

export default class StudentGoal extends Component {
//   state = {
//     star: this.props.star
//   }


addStar = (e) => {
  // console.log(e.currentTarget.dataset.id)
  let starId = parseInt(e.currentTarget.dataset.id)
  // console.log(starId)
  fetch(`http://localhost:9393/addstar`,{
    method: 'PATCH',
    headers : {
      "Content-type":"application/json"
    },
    body: JSON.stringify({id: starId})
    })
    .then(res => res.json())
    .then(studentGoalObj => {
      this.props.addStar(studentGoalObj)})
}

  render() {
    // console.log(this.props)
    let filteredStudentGoal = this.props.StudentGoalObj.filter(goal=> {
      return goal.student_id === this.props.currentStudent.id})
    
    let arrOfStudentGoals = filteredStudentGoal.map(studentGoal=>{
      // console.log(studentGoal)
      return (
      <div data-id={studentGoal.id} key={studentGoal.id} className="ui black button" onClick={this.addStar}>
          <p>Goal Title: {studentGoal.goal_title}</p>
          {studentGoal.completed ? <p><strong>Goal Complete!</strong></p> : ''}
          <i className="yellow star icon"></i> <span>Stars: {studentGoal.star}</span>
      </div>
      )
    })
    
    
    return (
      <div>
        {arrOfStudentGoals}
      </div>
    )
  }
}
