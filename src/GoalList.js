import React, { Component } from 'react'
import Goal from './Goal'
// import InputForm from './InputForm'
import { Card, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class GoalList extends Component {
  render() {
    let arrOfGoalList = this.props.goals.map(goalObj=>{
      return <Goal key={goalObj.id} goalObj={goalObj}/>
    })

    return (
      <div>
        <h2> Your Goal List </h2>
        <Link to='/newgoal'><Button>+ Add new Goal</Button></Link>
        <Card.Group itemsPerRow={1}>
        {arrOfGoalList}
        </Card.Group>
      </div>
    )
  }
}
