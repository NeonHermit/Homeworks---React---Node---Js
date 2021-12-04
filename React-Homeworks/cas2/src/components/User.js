import React from 'react';
export class User extends React.Component {
    render() {
        return(
            <div id="user">
                {this.props.isUser === true ? 
                <h2>{this.props.usera.ime}, {this.props.usera.prezime}, {this.props.usera.adresa}</h2> 
                    : <h2>{this.props.userb.ime}, {this.props.userb.prezime}, {this.props.userb.adresa}</h2>
                }
            </div>
        )
    }
}