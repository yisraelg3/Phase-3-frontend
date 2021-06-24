import React, { Component, Fragment } from 'react'

export default class Form extends Component {

  makeState = () => {
    const forState = {} 
    this.props.correctKeys.forEach(key => Object.assign(forState, {[key]: ''}))
    return forState
  }

  state = this.makeState()


  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let objectToPost = {}
    if (this.props.name === 'students') {
      objectToPost = {
        name: this.state.name,
        grade: this.state.grade,
        hair_color: this.state.hair_color,
        siblings_amount: this.state.number_of_siblings,
        teacher_id: this.props.teacherId}
    } else if (this.props.name === 'goals') {
      objectToPost = {
        title: this.state.title,
        description: this.state.description,
        teacher_id: this.props.teacherId
      }
    }
    fetch(`http://localhost:9393/${this.props.name}`,{
    method: 'POST',
    headers : {
      "Content-type":"application/json"
    },
    body: JSON.stringify(objectToPost)
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .then(t => {
      this.props.correctKeys.forEach(key => {
        this.setState ({
          [key]: ''
        })
      })
    })
  }

  render() {
    //  console.log(this.state)
    // debugger
     const inputs = this.props.correctKeys.map(key => {
       let UpcaseLabel = key[0].toUpperCase() + key.slice(1)
       let label = UpcaseLabel.replaceAll('_', ' ')
// debugger
       return (<Fragment key={key}>
       <label htmlFor={key}>{label}: </label>
       <input type='text' name={key} id={key} onChange={this.handleChange} value={this.state[key]}/>
       <br/>
       </Fragment>)})

    // console.log(this.props)
    return (
      <form onSubmit={this.handleSubmit}>
        {inputs}
        <button>Submit</button>
      </form>
    )
  }
}
