import React from 'react';
import {Input} from './Input';

export class Login extends React.Component{

    constructor(props){
        super(props)

        this.state={
            username:"",
            password:"",
            fieldType:"password",
            field: "password"
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    changeFieldType = () => {
        this.setState({
            fieldType: this.state.fieldType === "password" ? "text" : "password"
        })
    }

    changeField = () => {
        this.setState({
            field: this.state.field === "password" ? "textarea" : "password"
        })
    }

    submitForm = (event) =>{
        event.preventDefault();
        console.table(this.state)
    }

    render(){
        // console.log(this.state)
        return(
            <div id="login">
                <form onSubmit={this.submitForm}>
                 
                   <Input
                        tip={"text"}
                        ime={"username"}
                        placeholder={"Username"}
                        onChange={this.handleChange}
                   />
                    <Input 
                        tip={this.state.fieldType}
                        ime={"password"}    
                        placeholder={"Password"}
                        onChange={this.handleChange}
                        togglePassword={this.changeFieldType}
                        field={this.state.field}
                    />
                    <button className="action-button">Sign In</button>
                    <button type="button" onClick={this.changeField}>
                        Change
                    </button>
                </form>
            </div>
        )
    }
}