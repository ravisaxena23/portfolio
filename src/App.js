//React import
import React from 'react';
import firebase from "firebase";
import firestore from "./Firestore";
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';
//component are imported here
import Intro from './components/Intro'
import Resume from './components/Resume'
import GetIntouch from './components/GetIntouch'
import Learning from './components/Learning'

class App extends React.Component {
  componentDidMount() {
    let sidenav = document.querySelector('#slide-out');
    M.Sidenav.init(sidenav, {});
  }
  render() {
    return (
      <div class="app-body">
        <nav>
          <a href="#" data-target="slide-out" class="sidenav-trigger hide-on-med-and-up"><i class="material-icons">menu</i></a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><a href="#1">Know Me</a></li>
            <li><a href="#2">My Work</a></li>
            <li><a href="#3">Learning</a></li>
            <li><a href="#4">Contact</a></li>
          </ul>
        </nav>
        <ul id="slide-out" class="sidenav">
          <li><a href="#1"><i class="material-icons">person_pin</i>Know Me</a></li>
          <li><a href="#2"><i class="material-icons">format_align_left</i>My Work</a></li>
          <li><a href="#3"><i class="material-icons">spellcheck</i>Learning</a></li>
          <li><a href="#4"><i class="material-icons">contacts</i>Contact</a></li>
        </ul>
        {/* <div id="1" ><Intro /></div> */}
        <div id="2"><Resume /></div>
        <div id="3" className="learning-body"><Learning /></div>
        {/* <div id="4"><GetIntouch /></div> */}
      </div>
    )
  }
}

export default App;
