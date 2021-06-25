import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react'

export default class login extends Component {
  
  state = {
      username: '',
      password: ''
  }

  handleChange = (event) => {
      this.setState({
          [event.target.name]: event.target.value
      })
  }

  handleSubmit = (event) => {
      this.props.login(this.state)
  }
  
    render() {
    return (
        <div>
            <h2>Login</h2>
            <Form onSubmit={this.handleSubmit}>
                <input type='text' name='username' value={this.state.username} placeholder='Username' onChange={this.handleChange}/>
                <input type='password' name='password' value={this.state.password} placeholder='Password' onChange={this.handleChange}/>
                <Button style={{marginTop:300}} color='black' type='submit'>Login</Button>
            </Form>
        </div>
    )
  }
}
