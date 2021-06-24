import React, { Component } from 'react'
import Goal from './Goal'
import InputForm from './InputForm'
import { Card } from 'semantic-ui-react'
import { Route, Link } from 'react-router-dom'

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
        <Link to='/newgoal'>+ Add new Goal</Link>
        <Card.Group itemsPerRow={1}>
        {arrOfGoalList}
        </Card.Group>
        <Route exact path='/newgoal'>
          <InputForm correctKeys={correctKeys} name='goals' teacherId={this.props.teacherId} addItem={this.props.addItem}/>
        </Route>
      </div>
    )
  }
}
