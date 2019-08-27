import React, { Component } from 'react';
import axios from 'axios'

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: ''
  };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  handlePost = (event) => {
    event.preventDefault();
      axios.post('http://localhost:3001/things', ({name: this.state.name}))
      .then(response => {
          console.log(response)

      })
      .catch(error => console.log(error))
  }

  render() {
    return (
      <form onSubmit={this.handlePost}>
        <label>
          Name:
          <input type="text" name="name" onChange={this.handleChange} />
        </label>
        <label>
        Email:
          <input type="text" name="email" onChange={this.handleChange} />
          </label>
        <button type="submit" onClick={this.handlePost} value="Submit" />
      </form>
    );
  }
}


export default SignupForm;
