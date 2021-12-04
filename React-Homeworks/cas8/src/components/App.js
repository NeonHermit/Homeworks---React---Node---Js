import React from 'react';
import {Albums} from './Albums';
import {Posts} from './Posts';
import {Nav} from './Nav';
import axios from 'axios';
import {Route, Switch} from 'react-router-dom';

export class App extends React.Component{

    constructor(props){
        super(props);

        this.state={
            posts: []
        }
    }

    getPosts = () => {
        axios({
            url: 'https://jsonplaceholder.typicode.com/posts',
            method: 'GET'
        })
        .then(res => this.setState({
            posts: res.data
        }))
        .catch(err => {
            alert(err)
        })
    }

    componentDidMount(){
        this.getPosts();
    }

    render(){
        return(
            <div id="app">
                <h2>App</h2>
                <Nav />
                <Switch>
                    <Route path="/albums" component={Albums} />
                    <Route path="/posts" 
                    render={() => {
                      return <Posts postovi={this.state.posts} />
                    }}
                    />
                </Switch>
            </div>
        )
    }
}