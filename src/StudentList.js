import React, { Component } from 'react'
import Student from './Student'
import Form from './Form'
import { Card } from 'semantic-ui-react'

export default class StudentList extends Component {
  render() {
    let arrOfStudentList = this.props.students.map(studentObj=>{
      return <Student key={studentObj.id} studentObj={studentObj} setCurrentStudent={this.props.setCurrentStudent}/>
    })
    
    return (
      <div>
        <h2>Student Lists</h2>
        <Card.Group itemsPerRow={4}>
        {arrOfStudentList}
        </Card.Group>
      </div>
    )
  }
}
