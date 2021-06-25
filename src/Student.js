import React, { Component } from 'react'
import { Card, Button } from 'semantic-ui-react'
import { withRouter} from'react-router-dom'


class Student extends Component {
  handleClick = () => {
   this.props.setCurrentStudent(this.props.studentObj)
   this.props.history.push("/studentgoals")
  }

  render() {
    return (
      
      <Card>
        <h4>Name: {this.props.studentObj.name}</h4>
        <p>Grade: {this.props.studentObj.grade}</p> 
        <p>Hair color: {this.props.studentObj.hair_color}</p>
        <p>Siblings amount: {this.props.studentObj.siblings_amount}</p>
        <Button color='black' onClick={this.handleClick}>Goals</Button>
        {/* <Link to='/studentgoals'><Button color='black' onClick={this.handleClick}>Goals</Button></Link> */}
        <br/>
      </Card>
    )
  }
}
export default withRouter(Student)
