import React, { Component } from 'react'

export default class Goal extends Component {
  render() {
    return (
      <div>
        <p>title: {this.props.goalObj.title}</p>
        <p>description: {this.props.goalObj.description}</p>
        <br/>
      </div>
    )
  }
}
