//React import
import React from 'react';
import firebase from "firebase";
import firestore from "./Firestore";
import Navbar from './components/Static/Navbar'
import { Route, Switch } from 'react-router-dom'
//component are imported here
import Intro from './components/Intro'
import Resume from './components/Resume'
import GetIntouch from './components/GetIntouch'
import Learning from './components/Learning'

class App extends React.Component {
  render() {
    return (
      <React.Fragment className="App">
        <Navbar/>
        <div ><Intro /></div>
        <div><Resume /></div>
        <div><Learning /></div>
        <div><GetIntouch /></div>
        
      </React.Fragment>
    )
  }
}

export default App;
