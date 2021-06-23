import React, { Component } from 'react'

export default class Student extends Component {
  render() {

    return (
      
      <div>
        <p>name: {this.props.studentObj.name}</p>
        <p>grade: {this.props.studentObj.grade}</p> 
        <p>hair color: {this.props.studentObj.hair_color}</p>
        <p>siblings amount:{this.props.studentObj.siblings_amount}</p>
        <br/>
      </div>
    )
  }
}
