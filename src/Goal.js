import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

export default class Goal extends Component {
  render() {
    return (
      
        <Card>
        <h3>Title: {this.props.goalObj.title}</h3>
        <p>Description: {this.props.goalObj.description}</p>
        <br/>
       </Card>
    )
  }
}
