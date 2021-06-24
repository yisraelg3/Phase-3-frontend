import React, { Component } from 'react'

export default class StudentGoalForm extends Component {
  
  state = {
      goal: this.props.goals[0]
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const dataToPost = {
      student_id: this.props.studentId,
      goal_id: this.state.goal.id,
      star: 0,
      completed: false
    } 
    fetch(`http://localhost:9393/studentgoals`,{
    method: 'POST',
    headers : {
      "Content-type":"application/json"
    },
    body: JSON.stringify({dataToPost})
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .then(t => {
      this.setState ({
        goal: this.props.goals[0]
      })
    })
  }


  handleChange = (event) => {
    this.setState({
      goal: event.target.value
    })
  }
  
    render() {
      const goalList = this.props.goals.map(goal => <option key={goal.id} value={goal}> {goal.title} </option>)
    return (
      <form onSubmit={this.handleSubmit}>
          <select  value={this.state.goal} onChange={this.handleChange}>
            {goalList}
          </select>
          <button>Submit</button>
      </form>
    )
  }
}
