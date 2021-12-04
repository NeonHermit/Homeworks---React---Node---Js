import React from 'react';
import {User} from './User';


export class App extends React.Component{

  render(){

    const userA = {
      ime: 'Marduk',
      prezime: 'Tiamatkovski',
      adresa: 'nekoja'
    };

    const userB = {
      ime: 'Samael',
      prezime: 'Prezimenkovski',
      adresa: 'nema'
    }

    return(
      <div id="app">
        <User isUser={false} usera={userA} userb={userB}/>

      </div>
    )
  }
}