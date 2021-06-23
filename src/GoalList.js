import React, { Component } from 'react'
import Goal from './Goal'

export default class GoalList extends Component {
  render() {
    arrOfGoalList = this.props.goals.map(goalObj=>{
      return <Goal key={goalObj.id} goalObj={goalObj}/>
    })
  

    return (
      <div>
        <h2> Goal Lists </h2>
        {this.arrOfGoalList}
      </div>
    )
  }
}
