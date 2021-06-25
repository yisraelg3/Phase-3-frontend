import './App.css';
import { Component } from 'react'
import GoalList from './GoalList'
import StudentList from './StudentList'
import StudentGoalList from './StudentGoalList'
import StudentGoalForm from './StudentGoalForm'
import InputForm from'./InputForm'
import Login from'./Login'
import { Route, withRouter } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

class App extends Component{
  
  state= {
    id: 0,
    name: '',
    age: 0,
    subject: '',
    students: [],
    goals: [],
    currentStudent: {}
    // studentgoals: []
  }
  
  login = (loginInfo) => { 
    fetch(`http://localhost:9393/login`,{
      method: 'POST',
      headers : {
        "Content-type" :"application/json"
      },
      body: JSON.stringify(loginInfo)
    })
    .then((response)=> response.json())
    .then((teacherData) => {
      if (teacherData.error) {
        alert('Username is incorrect!')
      } else {
        this.setState({
            id: teacherData.id,
            name: teacherData.name,
            age: teacherData.age,
            subject: teacherData.subject,
            students: teacherData.students,
            goals: teacherData.goals
          }) 
          this.props.history.push('/home')
          // debugger
      }
    })
    .catch(() => {
        console.log("error")
    })
  }

  deleteStudentGoalFromState = (studentgoal) => {
    let theStudentContainsTheStudentGoal = this.state.students.find(student=>{
      return student.id === studentgoal.student_id
    })
    let newArrOfStudentgoals = theStudentContainsTheStudentGoal.studentgoals.filter(studentgoalObj=>{
      return studentgoalObj.id !== studentgoal.id
    })
    let copyOfStudent = {
      ...theStudentContainsTheStudentGoal,
      studentgoals: newArrOfStudentgoals
    }
    let theCopyOfAllStudents = this.state.students.map(student=>{
      if(student.id === copyOfStudent.id){
        return copyOfStudent
      }else{
        return student
      }
    })

    this.setState({
      students: theCopyOfAllStudents
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

  addStar = (updatedStudentObj) => {
    // console.log(updatedStudentObj)
    // console.log(this.state.students)
    const student = this.state.students.find(student => student.id === updatedStudentObj.student_id)
    const updatedStudentGoals= student.studentgoals.map(studentGoalobj => {
      if (studentGoalobj.id === updatedStudentObj.id ){
        return Object.assign({}, studentGoalobj, {star: updatedStudentObj.star},{completed: updatedStudentObj.completed})
      } else {
        return studentGoalobj
      }
    })
    const updatedStudentsArray = this.state.students.map(studentObj => {
      if (studentObj.id === student.id) {
        return Object.assign({}, studentObj, {studentgoals: updatedStudentGoals})
      } else {
        return studentObj
      }
    })
    // console.log(updatedStudentsArray)
    this.setState({
      students: updatedStudentsArray
    })
  }

  logout = () => {
    this.setState({
      id: 0,
      name: '',
      age: 0,
      subject: '',
      students: [],
      goals: [],
      currentStudent: {}
    }) 
    this.props.history.push('/')
    // debugger
  }
  
  render() {
    // console.log(this.props.history)
    if (this.state.id === 0 && this.props.history.location.pathname !== '/') {
      this.props.history.push('/')
    }
    // console.log(this.state.students)
    // debugger
    // let studentKeys = this.state.students.length ? Object.keys(this.state.students[0]) : []
    // let studentTransformKeys = studentKeys.map(key => {
    //   if (key === 'siblings_amount') {
    //     return 'number_of_siblings'
    //   } else {
    //     return key
    //   }
    // })
    let studentCorrectKeys =  ['name','grade','hair_color','number_of_siblings']

    // let goalKeys = this.state.goals.length > 0 ? Object.keys(this.state.goals[0]) : []
    let goalCorrectKeys = ['title','description']

    // console.log(this.state)
    return (
      <div style={{padding: 30,backgroundColor:'#ede5e1', backgroundImage: "url('https://i.pinimg.com/originals/43/7c/b7/437cb739d14912acd84d65ee853b9067.gif')"}}>
        <h1 style={{paddingTop: 20, fontSize: 40, textAlign: 'center' , color: 'black', fontWeight: 'bold', fontFamily: 'Lucida Std'}}>✨Star Chart✨</h1>
        {/* <Switch> */}
          <Route exact path='/'>
            <Login login={this.login}/>
          </Route>
          <Route exact path='/home'>
            <h1>Welcome {this.state.name}!</h1> <Button color ='grey' onClick={this.logout}>Logout</Button>
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
            deleteStudentGoalFromState = {this.deleteStudentGoalFromState}
            // routerProps={routerProps}
            currentStudent={this.state.currentStudent} 
            students={this.state.students} 
            teacherId={this.state.id}
            goals={this.state.goals}
            // star={this.state.star}
            addGoalToStudent={this.addGoalToStudent}
            addStar={this.addStar}
          /> 
        </Route> 
        {/* </Switch> */}
      </div>
    )
  }
}

export default withRouter(App);
