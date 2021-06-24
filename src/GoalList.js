import React, { Component } from 'react'
import Goal from './Goal'
import Form from './Form'

export default class GoalList extends Component {
  render() {
    let arrOfGoalList = this.props.goals.map(goalObj=>{
      return <Goal key={goalObj.id} goalObj={goalObj}/>
    })

    let goalKeys = this.props.goals.length > 0 ? Object.keys(this.props.goals[0]) : []
    let correctKeys = this.props.goals.length > 0 ? goalKeys.filter(key => ['title','description'].includes(key)) : goalKeys

    return (
      <div>
        <h2> Goal List </h2>
        {arrOfGoalList}
        {this.props.goals.length > 0 ?  <Form correctKeys={correctKeys} name='goals' teacherId={this.props.teacherId}/> : ''}
      </div>
    )
  }
}
