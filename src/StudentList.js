import React, { Component } from 'react'
import Student from './Student'
// import InputForm from './InputForm'
import { Card, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class StudentList extends Component {

  render() {
  
    const arrOfStudentList = this.props.students.map(studentObj => {
      return <Student key={studentObj.id} studentObj={studentObj} setCurrentStudent={this.props.setCurrentStudent} routerProps={this.props.routerProps}/>
    })

    return (
      <div>
        <h2>Your Student List</h2>
        <Link to='/newstudent'><Button>+ Add new Student</Button></Link>
        <Card.Group itemsPerRow={4}>
        {arrOfStudentList}
        </Card.Group>
      </div>
    )
  }
}
