import React, { Component } from 'react'
import Student from './Student'
import Form from './Form'

export default class StudentList extends Component {
  render() {
    arrOfStudentList = this.props.students.map(studentObj=>{
      return <Student key={studentObj.id} studentObj={studentObj} setCurrentStudent={this.props.setCurrentStudent}/>
    })
    
    return (
      <div>
        <h2>Student Lists</h2>
        {this.arrOfStudentList}
      </div>
    )
  }
}
