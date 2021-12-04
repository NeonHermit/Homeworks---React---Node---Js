import React from 'react';

export class Input extends React.Component{

    render(){
        return(
            <p>
                {this.props.field === "textarea" ?
                <textarea rows="5" cols="20"/> : 
                <input 
                    type={this.props.tip}
                    placeholder={this.props.placeholder}
                    name={this.props.ime}
                    onChange={this.props.onChange}
                />
                }
                {this.props.ime === "password" ?
                    <button onClick={this.props.togglePassword} className="eye-button" type="button">
                            <i className={"fa " + (this.props.tip === "password" ? "fa-eye-slash" : "fa-eye")} ></i>
                    </button>
                    : null
                }
            </p>
        )
    }
}