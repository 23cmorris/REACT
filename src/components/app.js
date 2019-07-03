import React, { Component } from 'react'
import moment from "moment"
export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Cannon React</h1>
        <div> 
          {moment().format("MMM Do YYYY, h:mm:ss a")}
        </div>
        <h2>Hi ya</h2>
      </div>
    );
  }
}
