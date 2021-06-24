import React, { Component } from 'react'
import Goal from './Goal'
import { Card } from 'semantic-ui-react'

export default class GoalList extends Component {
  render() {
    let arrOfGoalList = this.props.goals.map(goalObj=>{
      return <Goal key={goalObj.id} goalObj={goalObj}/>
    })
  

    return (
      <div>
        <h2> Goal Lists </h2>
        <Card.Group itemsPerRow={1}>
        {arrOfGoalList}
        </Card.Group>
      </div>
    )
  }
}
