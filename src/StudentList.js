import React, { Component } from 'react'
import Student from './Student'
import Form from './InputForm'
import { Card } from 'semantic-ui-react'
import { Route, Link } from 'react-router-dom'

export default class StudentList extends Component {

  render() {
  
    let studentKeys = this.props.students.length > 0 ? Object.keys(this.props.students[0]) : []
    let transformKeys = studentKeys.map(key => {
      if (key === 'siblings_amount') {
        return 'number_of_siblings'
      } else {
        return key
      }
    })
    let correctKeys = this.props.students.length > 0 ? transformKeys.filter(key => ['name','grade','hair_color','number_of_siblings'].includes(key)) : studentKeys

    const arrOfStudentList = this.props.students.map(studentObj => {
      return <Student key={studentObj.id} studentObj={studentObj} setCurrentStudent={this.props.setCurrentStudent} />
    })

    return (
      <div>
        <h2>Student List</h2>
        <Link to='/newstudent'>+ Add new Student</Link>
        <Card.Group itemsPerRow={4}>
        {arrOfStudentList}
        </Card.Group>
        <Route exact path='/newstudent'>
          <Form correctKeys={correctKeys} name='students' teacherId={this.props.teacherId} addItem={this.props.addItem}/>
        </Route>
      </div>
    )
  }
}
