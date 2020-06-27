import React from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

import GetIntouch from '../GetIntouch'
import Intro from '../Intro'
import Resume from '../Resume'
import Learning from '../Learning'

class App extends React.Component {
    componentDidMount() {
        let sidenav = document.querySelector('#slide-out');
        M.Sidenav.init(sidenav, {});
    }
    render() {
        return (
            <React.Fragment>
                <nav>
                    <a href="#" data-target="slide-out" class="sidenav-trigger hide-on-med-and-up"><i class="material-icons">menu</i></a>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                    </ul>
                </nav>
                <ul id="slide-out" class="sidenav">
                    <li><a href="#item1">Item 1</a></li>
                    <li><a href="#item2">Item 2</a></li>
                    <li><a href="#item3">Item 3</a></li>
                </ul>
            </React.Fragment>
        )
    }
}

export default App;
