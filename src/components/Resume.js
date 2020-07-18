import React, { Component } from 'react';
import firebase from "firebase";
import firestore from "../Firestore";
import Contribution from './Contribution'
import './CSS/Resume.css'


class Resume extends Component {


  state = {
    experiences: null,
    skills: null
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
    db.collection("skills")
      .get()
      .then(snapshot => {
        const skills = []
        snapshot.forEach(doc => {
          const dat = doc.data()
          skills.push(dat)
        })
        this.setState({ skills: skills })
        console.log(snapshot)
      });
  };

  render() {
    return (
      <React.Fragment id="resume">

        <div class="row">
          {/* style={{ backgroundImage: "url('https://ravi-portfolio.s3.us-east-2.amazonaws.com/image6.jpg')", backgroundRepeat: "no-repeat", backgroundPosition: "top center", backgroundPositionX: 'right', }} */}
          <div class="timeline resume-section col m6 s12" >
            <h5 class="heading resume-heading">EDUCATION</h5>
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
                        <a class="bnt-more resume-a">{experiences.Percentage}</a>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
          <div class="col m6 s12">
            <h5 class="heading resume-heading">My SKILLS</h5>
            {
              this.state.skills &&
              this.state.skills.map(skills => {
                return (
                  <div class="wrap">
                    <section class="chart-wrapper">
                      <ul class="chart-horizontal">
                        <li class="chart-bar" data-skill={skills.Value}><span class="chart-bar-label">{skills.Name}</span> <span class="percentage">{skills.Value}%</span></li>
                      </ul>

                    </section>
                  </div>
                )
              })
            }
          </div>
        </div>

        <Contribution />
      </React.Fragment>
    )
  }
}

export default Resume;