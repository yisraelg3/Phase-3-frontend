import React, { Component } from 'react'

export default class StudentGoal extends Component {
//   state = {
//     star: this.props.star
//   }


addStar = (e) => {
  // console.log(e.target.dataset.id)
  let starId = parseInt(e.target.dataset.id)
  fetch(`http://localhost:9393/star`,{
    method: 'PATCH',
    headers : {
      "Content-type":"application/json"
    },
    body: JSON.stringify({id: starId})
    })
    .then(res => res.json())
    .then(data => console.log(data))
}

  render() {
    let filteredStudentGoal = this.props.StudentGoalObj.filter(goal=> {
      return goal.student_id === this.props.currentStudent.id})
    
    let arrOfStudentGoals = filteredStudentGoal.map(studentGoal=>{
      return (
      <div data-id={studentGoal.id} key={studentGoal.id} className="ui black button" onClick={this.addStar}>
          <p>Goal Title: {studentGoal.goal_title}</p>
          <i class="yellow star icon"></i> star: {studentGoal.star}
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
