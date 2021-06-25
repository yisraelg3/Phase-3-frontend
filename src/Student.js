import React, { Component } from 'react'
import { Card, Button } from 'semantic-ui-react'
import { withRouter} from'react-router-dom'


class Student extends Component {
  handleClick = () => {
    this.props.history.push(`/studentgoals/${this.props.studentObj.id}`)
   this.props.setCurrentStudent(this.props.studentObj)
  }

  render() {
    return (
      
      <Card style={{backgroundColor: '#f09b5f', padding: 30}}>
        <h3 style={{fontFamily: 'Lucida Std'}}>Name: {this.props.studentObj.name}</h3>
        <p>Grade: {this.props.studentObj.grade}</p> 
        <p>Hair color: {this.props.studentObj.hair_color}</p>
        <p>Siblings amount: {this.props.studentObj.siblings_amount}</p>
        <Button color='black' onClick={this.handleClick}>Student Goals</Button>
        {/* <Link to='/studentgoals'><Button color='black' onClick={this.handleClick}>Goals</Button></Link> */}
        
      </Card>
    )
  }
}
export default withRouter(Student)
