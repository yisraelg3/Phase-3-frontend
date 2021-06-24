import React, { Component } from 'react'
import { Card, Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

export default class Student extends Component {

  addStudentGoals = () =>{
    // <StudentGoalList/>
  }

  render() {
  
    return (
      
      <Card>
        <h4>Name: {this.props.studentObj.name}</h4>
        <p>Grade: {this.props.studentObj.grade}</p> 
        <p>Hair color: {this.props.studentObj.hair_color}</p>
        <p>Siblings amount: {this.props.studentObj.siblings_amount}</p>
        <Button color='black' onClick={this.addStudentGoals}>Goals</Button>
        <br/>
      </Card>
    )
  }
}
