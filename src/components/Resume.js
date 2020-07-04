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
        <section class="timeline resume-section" style={{ backgroundImage: "url('https://ravi-portfolio.s3.us-east-2.amazonaws.com/image6.jpg')", backgroundRepeat: "no-repeat", backgroundPosition: "top center", backgroundPositionX: 'right', }}>
          {
            this.state.experiences &&
            this.state.experiences.map(experiences => {
              return (
                <div class="resume">
                  <div class="timeline-item">
                    <div class="timeline-img"></div>
                    <div class="timeline-content js--fadeInLeft">
                      <h2 class="con-heading">{experiences.Institute}</h2>
                      <div class="date">{experiences.Year}</div>
                      <p class="para">{experiences.Name}</p>
                      <p class="para"><b>Activities:</b>{experiences.Activities}</p>
                      <a class="bnt-more resume-a">{experiences.Percentage}%</a>
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