import React, { Component } from 'react'
import Student from './Student'
import Form from './Form'

export default class StudentList extends Component {
  render() {
    return (
      <div>
        <Student setCurrentStudent={this.props.setCurrentStudent}/>
      </div>
    )
  }
}
