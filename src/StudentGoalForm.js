import React, { Component } from 'react'

export default class StudentGoalForm extends Component {
  
  state = {
      title: '',
      description: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  
    render() {
    return (
      <form>
          <input type='text' name='title' id='title' value={this.state.title} onChange={this.handleChange}/>
          <input type='text' name='description' id='description' value={this.state.description} onChange={this.handleChange}/>
        
      </form>
    )
  }
}
