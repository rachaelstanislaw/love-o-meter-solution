import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default class BadMatch extends Component{
  // refactor to make this a funcitonal component
  render(){
    return (
      <div>
        {/* Here is where you can customize the result of a bad match */}
        <p className = "results">Ouch! Not a great match. Consider saving your money this year!</p>
      </div>
    );
  }
}
