import React from 'react';
import {Contact} from './Contact';
import {Home} from './Home';
import {Info} from './Info';
import {Route, Switch} from 'react-router-dom';
import {Nav} from './Nav';

export class App extends React.Component{

  render(){
    return(
      <div id="app">
        <p>Cas 7</p>

        <Nav />
        <Switch>
          <Route exact path="/home" component = {Home} />
          <Route path="/home/info" component = {Info} />
          <Route path="/contact" component = {Contact} />
        </Switch>
      </div>
    )
  }
}