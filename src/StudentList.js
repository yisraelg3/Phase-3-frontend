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
        <hr style={{marginTop: 100}}></hr>
        <h2 style={{paddingTop: 30}}>Student List</h2>
        <Link to='/newstudent'><Button style={{marginBottom: 5}}color="black">+ Add new Student</Button></Link>
        <Card.Group style={{alignItems: 'center'}}itemsPerRow={3} >
        {arrOfStudentList}
        </Card.Group>
      </div>
    )
  }
}
