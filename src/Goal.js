import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

export default class Goal extends Component {
  render() {
    return (
      
        <Card style={{maxWidth: 10000, alignItems: 'center', textAlign: 'center',  backgroundColor: '#a7c2b2'}}>
        <h3 style={{fontFamily: 'Lucida Std' , marginTop:20}}><strong>Goal:</strong> {this.props.goalObj.title}</h3>
        <p ><strong>Description:</strong> {this.props.goalObj.description}</p>
        <br/>
       </Card>
    )
  }
}
