import React, { Component } from 'react';
import firebase from "firebase";
import firestore from "../Firestore";
import './CSS/Learning.css'

class Learning extends Component {

  state = {
    stack: null
  }


  componentDidMount() {
    const db = firebase.firestore();
    db.collection("stacks")
      .get()
      .then(snapshot => {
        const stack = []
        snapshot.forEach(doc => {
          const data = doc.data()
          stack.push(data)
        })
        this.setState({ stack: stack })
        console.log(snapshot)
      });
  };

  render() {
    return (
      <div id="stack" class="row">
        {
          this.state.stack &&
          this.state.stack.map(stack => (
            <div class="col m6 s12">
              <div class="card app-card">
                <div class="card-image">
                  <img src={stack.Imglink} class="learning-img"></img>
                  <a class="learning-float learning-verify waves-effect waves-light" href={stack.Verify} target="_blank">Verify Enrolment</a>
                </div>
                <div class="card-content">
                  <span class="card-title heading">{stack.Name}</span>
                  <p class="para">{stack.Intro}</p>
                  <span class="card-title heading">Technologies Learned</span>
                  <a class="learning-btn">{stack.Outcome1}</a>&nbsp;&nbsp;
                  <a class="learning-btn">{stack.Outcome2}</a>&nbsp;&nbsp;
                  <a class="learning-btn">{stack.Outcome3}</a>
                </div>
              </div>
            </div>
          ))}
      </div>
    )
  }
}

export default Learning;