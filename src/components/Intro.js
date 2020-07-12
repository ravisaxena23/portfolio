import React, { Component } from 'react';
import firebase from "firebase";
import firestore from "../Firestore";
import './CSS/Intro.css'

class Intro extends Component {


    state = {
        intro: null
    }


    componentDidMount() {
        const db = firebase.firestore();
        db.collection("self")
            .get()
            .then(snapshot => {
                const intro = []
                snapshot.forEach(doc => {
                    const data = doc.data()
                    intro.push(data)
                })
                this.setState({ intro: intro })
                console.log(snapshot)
            });
    };

    render() {
        return (
            <div id="resume" class="row ">
                {
                    this.state.intro &&
                    this.state.intro.map(intro => {
                        return (
                            <div>
                                <div class="hide-on-med-and-up card col m6 s12 intro-card-body-mobile">
                                    <h5 class="heading align-text">{intro.Name}</h5>
                                    <p class="subhead">{intro.Subhead}</p>
                                    <div class="row margin-intro">
                                        <div class="col m6 s4 sub-intro-head">E-mail:</div>
                                        <div class="col m6 s8 sub-intro">{intro.Email}</div>
                                        <div class="col m6 s4 sub-intro-head">Mobile No:</div>
                                        <div class="col m6 s8 sub-intro">{intro.Phone}</div>
                                        <div class="col m6 s4 sub-intro-head">Address:</div>
                                        <div class="col m6 s8 sub-intro">{intro.Address}</div>
                                    </div>
                                    <div>
                                        <a href={intro.Linkdin} target="_blank"><i class="fab fa-linkedin intro-icon fa-2x" aria-hidden="true"></i></a>
                                        <a href={intro.Github}  target="_blank"><i class="fab fa-github fa-2x intro-icon" aria-hidden="true"></i></a>
                                        <a href={intro.Gitlab}  target="_blank"> <i className="fab fa-gitlab fa-2x intro-icon"></i></a>
                                    </div>
                                    <img src={intro.Image} class="intro-img-mobile"></img>
                                </div>
                                <div class="col m6 s12">
                                    <p>{intro.Github}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Intro;