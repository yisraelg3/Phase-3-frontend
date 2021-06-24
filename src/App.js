import './App.css';
import { Component } from 'react'
import GoalList from './GoalList'
import StudentList from './StudentList'
import StudentGoalList from './StudentGoalList'

class App extends Component{
  
  state= {
    id: 0,
    name: '',
    age: 0,
    subject: '',
    students: [],
    goals: [],
    currentStudent: {}
  }
  
  componentDidMount(){ 
    fetch(`http://localhost:9393/teachers`)
    .then((response)=> response.json())
    .then((teacherData) => {
        this.setState({
          id: teacherData.id,
          name: teacherData.name,
          age: teacherData.age,
          subject: teacherData.subject,
          students: teacherData.students,
          goals: teacherData.goals
        }) 
        // debugger
    })
    .catch(() => {
        console.log("error")
    })
  }

  setCurrentStudent = (student) => {
    this.setState({
      currentStudent: student
    })
  }
  
  render() {
    console.log(this.state)
    return (
      <div>
        <h1>Star Chart</h1>
        <GoalList goals={this.state.goals} teacherId={this.state.id}/>
        <StudentList students={this.state.students} setCurrentStudent={this.setCurrentStudent} teacherId={this.state.id}/>
        <StudentGoalList currentStudent={this.state.currentStudent} goals={this.state.goals} teacherId={this.state.id}/>
      </div>
    )
  }
}

export default App;
