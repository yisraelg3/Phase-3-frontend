import './App.css';
import { Component } from 'react'
import GoalList from './GoalList'
import StudentList from './StudentList'
import StudentGoalList from './StudentGoalList'
import StudentGoalForm from './StudentGoalForm'
import InputForm from'./InputForm'
import {Switch, Route} from 'react-router-dom'

class App extends Component{
  
  state= {
    id: 0,
    name: '',
    age: 0,
    subject: '',
    students: [],
    goals: [],
    currentStudent: {},
    studentgoals: []
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

  addItem = (newObj, name) => {
    const newStateArr = [...this.state[name], newObj]
    this.setState({
      [name]: newStateArr
    })
  }

  addGoalToStudent = (newStudentGoal, goal_title) => {
    newStudentGoal.goal_title = goal_title
    const Student = this.state.students.find(student => student.id === newStudentGoal.student_id)
    const newStudentGoalArray = [...Student.studentgoals, newStudentGoal]
    const newStudentObj = Object.assign({}, Student, {studentgoals: newStudentGoalArray})
    // debugger
    const newStudentsArray = this.state.students.map(student => {
      if (student.id === Student.id) {
        return newStudentObj
      } else {
        return student
      }
    })
    this.setState({
      students: newStudentsArray
    })
  }

  setCurrentStudent = (student) => {
    this.setState({
      currentStudent: student
    })
  }
  
  render() {
    // console.log(this.state.students)
    // debugger
    let studentKeys = this.state.students.length ? Object.keys(this.state.students[0]) : []
    let studentTransformKeys = studentKeys.map(key => {
      if (key === 'siblings_amount') {
        return 'number_of_siblings'
      } else {
        return key
      }
    })
    let studentCorrectKeys = this.state.students.length > 0 ? studentTransformKeys.filter(key => ['name','grade','hair_color','number_of_siblings'].includes(key)) : studentKeys

    let goalKeys = this.state.goals.length > 0 ? Object.keys(this.state.goals[0]) : []
    let goalCorrectKeys = this.state.goals.length > 0 ? goalKeys.filter(key => ['title','description'].includes(key)) : goalKeys

    // console.log(this.state)
    return (
      <div>
        <h1>Star Chart</h1>
        {/* <Switch> */}
          <Route exact path='/'>
            <GoalList goals={this.state.goals} teacherId={this.state.id} addItem={this.addItem}/>
            <StudentList 
              students={this.state.students} 
              setCurrentStudent={this.setCurrentStudent} 
              teacherId={this.state.id} 
              addItem={this.addItem}
            />
          </Route>
          <Route exact path='/newstudentgoal'>
            <StudentGoalForm 
              goals={this.state.goals} 
              currentStudent={this.state.currentStudent} 
              addGoalToStudent={this.addGoalToStudent}
            />
          </Route>
          <Route exact path='/newstudent'>
           <InputForm correctKeys={studentCorrectKeys} name='students' teacherId={this.state.id} addItem={this.addItem}/>
        </Route>
        <Route exact path='/newgoal'>
          <InputForm correctKeys={goalCorrectKeys} name='goals' teacherId={this.state.id} addItem={this.addItem}/>
        </Route>
        <Route exact path='/studentgoals'>
            <StudentGoalList 
            // routerProps={routerProps}
            currentStudent={this.state.currentStudent} 
            students={this.state.students} 
            teacherId={this.state.id}
            goals={this.state.goals}
            // star={this.state.star}
            addGoalToStudent={this.addGoalToStudent}
          /> 
        </Route> 
        {/* </Switch> */}
      </div>
    )
  }
}

export default App;
