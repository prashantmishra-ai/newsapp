import './App.css';
import React, { Component } from 'react'
import News from './components/News';
import Navbar from './components/Navbar';


export default class App extends Component {
  render() {
    return (
      <>
      <Navbar></Navbar>
      <News/>
      </>
    )
  }
}


// api : daab5325f97a4dcfad0fa474b5f0bad1