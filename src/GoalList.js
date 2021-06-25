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
        <h2 style={{textAlign: 'left', paddingTop: 50}}> Goal Lists </h2>
        <Link to='/newgoal'><Button style={{marginBottom: 5, alignItems: 'right'}} color="black">+ Add new Goal</Button></Link>
        <Card.Group itemsPerRow={3} style={{alignItems: 'center'}}>
        {arrOfGoalList}
        </Card.Group>
      </div>
    )
  }
}
