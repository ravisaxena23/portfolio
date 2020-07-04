import React, { Component } from 'react';
import firebase from "firebase";
import firestore from "../Firestore";
import Contribution from './Contribution'
import './CSS/Resume.css'

class Resume extends Component {


  state = {
    experiences: null
  }


  componentDidMount() {
    const db = firebase.firestore();
    db.collection("experiences")
      .get()
      .then(snapshot => {
        const experiences = []
        snapshot.forEach(doc => {
          const data = doc.data()
          experiences.push(data)
        })
        this.setState({ experiences: experiences })
        console.log(snapshot)
      });
  };

  render() {
    return (
      <React.Fragment id="resume">
       <section class="timeline resume-section">
          {
            this.state.experiences &&
            this.state.experiences.map(experiences => {
              return (
                  <div class="resume">
                    <div class="timeline-item">
                      <div class="timeline-point"></div>
                        <div class="timeline-content js--fadeInLeft">
                        <h2 class="heading">Title</h2>
                        <div class="date">1 MAY 2016</div>
                        <p class="para">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ipsa ratione omnis alias cupiditate saepe atque totam aperiam sed nulla voluptatem recusandae dolor, nostrum excepturi amet in dolores. Alias, ullam.</p>
                        <a class="bnt-more resume-a">More</a>
                      </div>
                    </div>
                  </div>
              )
            })
          }
      </section>

        <Contribution />
      </React.Fragment>
    )
  }
}

export default Resume;