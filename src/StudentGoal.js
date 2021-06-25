import React, { Component } from 'react'
import { Card, Button } from 'semantic-ui-react'

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

handleDelete = (e) => {
  
  let currentId = e.currentTarget.dataset.id
    fetch(`http://localhost:9393/studentgoals/${currentId}`, {
      method: "DELETE"
    })  
    .then(res=>res.json())
    .then((deleteStudentGoal)=>{
      this.props.deleteStudentGoalFromState(deleteStudentGoal)
    })
}

  render() {
    // console.log(this.props)
    let filteredStudentGoal = this.props.StudentGoalObj.filter(goal=> {
      return goal.student_id === this.props.currentStudent.id})
    
    let arrOfStudentGoals = filteredStudentGoal.map(studentGoal=>{
      // console.log(arrOfStudentGoals)
      return (
        <Card itemPerRow={2} style={{marginTop: 10, padding:10, backgroundColor: '#8db4c9'}}>
      <div style={{align: 'center'}} data-id={studentGoal.id} key={studentGoal.id} onClick={this.addStar}>
          <h3 style={{fontFamily: 'Lucida Std'}}>Goal: {studentGoal.goal_title}</h3>
          {studentGoal.completed ? <p><strong>Goal Complete!</strong></p> : ''}
          <i className="yellow star icon"></i> <span style={{fontWeight: 'bold'}}>Stars: {studentGoal.star}<br/></span>
      </div>
      <Button data-id={studentGoal.id} style={{marginTop: 10}}color='black' onClick={this.handleDelete}>Delete</Button>
      </Card>
      )
    })
    
    
    return (
      <div>
        {arrOfStudentGoals}
      </div>
    )
  }
}
