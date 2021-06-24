import React, { Component } from 'react'
import Goal from './Goal'
import Form from './Form'
import { Card } from 'semantic-ui-react'

export default class GoalList extends Component {
  render() {
    let arrOfGoalList = this.props.goals.map(goalObj=>{
      return <Goal key={goalObj.id} goalObj={goalObj}/>
    })

    let goalKeys = this.props.goals.length > 0 ? Object.keys(this.props.goals[0]) : []
    let correctKeys = this.props.goals.length > 0 ? goalKeys.filter(key => ['title','description'].includes(key)) : goalKeys


    return (
      <div>
        <h2> Goal Lists </h2>
        <Card.Group itemsPerRow={1}>
        {arrOfGoalList}
        </Card.Group>
        {this.props.goals.length > 0 ?  <Form correctKeys={correctKeys} name='goals' teacherId={this.props.teacherId}/> : ''}
      </div>
    )
  }
}
