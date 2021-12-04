import React from 'react';

import {Link} from 'react-router-dom';

export class Nav extends React.Component{
    render(){
        return(
            <div id="nav">
                <ul>
                    <li>
                        <Link to ="/">&#127968;</Link>
                    </li>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/home/info">Info</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        )
    }
}