import React from 'react';

export class App extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      tel: "",
      gender: ""
    }
  }

  changeName = (event) => {
    this.setState({
      firstname: event.target.value
    })
  }

  changeLastName = (event) => {
    this.setState({
      lastname: event.target.value
    })
  }

  changeEmail = (event) => {
    this.setState({
      email: event.target.value
    })
  }

  changeTel = (event) => {
    this.setState({
      tel: event.target.value
    })
  }

  noChangeGender = (event) => {
    this.setState({
      gender: event.target.value
    })
  }

  showMe = () => {
    alert(`First Name: ${this.state.firstname} 
          \nLast Name: ${this.state.lastname}
          \nEmail: ${this.state.email}
          \nMobile Phone Number: ${this.state.tel}
          \nGender: ${this.state.gender}`)
  }

  render(){

    return(
      <div id = "app">
        <h4 align = "center">Sign Up</h4>
        <p align = "center">Create your e-mail address</p>

        <br/>
        <br/>

        <p align = "center">
          <input 
            type = {"text"}
            placeholder = {"First Name"}
            value = {this.state.firstname}
            onChange = {this.changeName}
          />

          <input 
            type = {"text"}
            placeholder = {"Last Name"}
            value = {this.state.lastname}
            onChange = {this.changeLastName}
          />

          <br/>
          <br/>

          <input 
            type = {"email"}
            placeholder = {"Email address @host.com"}
            value = {this.state.email}
            onChange = {this.changeEmail}
          />

          <br/>
          <br/>

          <input 
            type = {"tel"}
            placeholder = {"Mobile Phone number"}
            pattern = {"[0-9]{3}-[0-9]{3}-[0-9]{3}"}
            value = {this.state.tel}
            onChange = {this.changeTel}
          />

          <br/>
          <br/>

           <input 
            placeholder = {"Gender"}
            list = "opcii"
            value = {this.state.gender}
            onChange = {this.noChangeGender}
          />
          <datalist id = "opcii">
            <option>Male</option>
            <option>Female</option>
          </datalist>

          <br/>
          <br/>

          <button onClick={this.showMe}>
            Get Some
          </button>
        </p>
      </div>
    )
  }
}