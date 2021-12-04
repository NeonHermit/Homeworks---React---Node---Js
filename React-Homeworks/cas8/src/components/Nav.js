import React from 'react';
import {Link} from 'react-router-dom';

export class Nav extends React.Component{
    render(){
        return(
            <div id="nav">
                <ul>
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/albums"}>Albums</Link>
                    </li>
                    <li>
                        <Link to={"/posts"}>Posts</Link>
                    </li>
                </ul>
            </div>
        )
    }
}
