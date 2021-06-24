import React, { Component } from 'react'
import { Button, Form } from 'semantic-ui-react'

export default class StudentGoalForm extends Component {
  
  state = {
      goal: this.props.goals[0].title
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const dataToPost = {
      student_id: this.props.currentStudent.id,
      goal_id: this.props.goals.find(goal => goal.title === this.state.goal).id,
      star: 0,
      completed: false,
    } 

    fetch(`http://localhost:9393/studentgoals`,{
    method: 'POST',
    headers : {
      "Content-type":"application/json"
    },
    body: JSON.stringify(dataToPost)
    })
    .then(res => res.json())
    .then(newStudentGoal => this.props.addGoalToStudent(newStudentGoal, this.state.goal))
    .then(t => {
      this.setState ({
        goal: this.props.goals[0].title
      })
    })
  }


  handleChange = (event) => {
    this.setState({
      goal: event.target.value
    })
  }
  
    render() {
      // console.log(this.props.goals)
      // console.log(this.state.goal)
      const goalList = this.props.goals.map(goal => <option key={goal.id} value={goal.title}> {goal.title} </option>)
    return (
      <div>
        {/* {this.props.student.name} */}
        <h3>Assign {this.props.currentStudent.name} a new goal</h3> 
        <Form onSubmit={this.handleSubmit}>
            <select  value={this.state.goal} onChange={this.handleChange}>
              {goalList}
            </select>
            <Button>Submit</Button>
        </Form>
      </div>
    )
  }
}
