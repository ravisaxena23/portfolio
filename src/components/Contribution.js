import React, { Component } from 'react';
import firebase from "firebase";
import firestore from "../Firestore";
import './CSS/Contribution.css'

class Contribution extends Component {


    state = {
        contribution: null,
    }


    componentDidMount() {
        const db = firebase.firestore();
        db.collection("contributions")
            .get()
            .then(snapshot => {
                const contribution = []
                snapshot.forEach(doc => {
                    const data = doc.data()
                    contribution.push(data)
                })
                this.setState({ contribution: contribution })
                console.log(snapshot)
            });
    };

    render() {
        window.onload = function () {

            document.getElementById('right-button').onclick = function () {
                scrollLeft(document.getElementById('Contribution'), 310, 700);
            }
            document.getElementById('left-button').onclick = function () {
                scrollLeft(document.getElementById('Contribution'), -310, 700);
            }
        };

        function scrollLeft(element, change, duration) {
            var start = element.scrollLeft,
                currentTime = 0,
                increment = 20;

            console.log(start)

            var animateScroll = function () {
                currentTime += increment;
                var val = Math.easeInOutQuad(currentTime, start, change, duration);
                element.scrollLeft = val;
                if (currentTime < duration) {
                    setTimeout(animateScroll, increment);
                }
            };
            animateScroll();
        }
        Math.easeInOutQuad = function (t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };
        return (
            <div class="con-bg-color">
                <br />
                <h5 class="heading con-color">WORK EXPERRIENCE</h5>
                <div id="Contribution" class="scrolling-wrapper">
                    {
                        this.state.contribution &&
                        this.state.contribution.map(contribution => {
                            return (
                                <div class="card1" >
                                    <div class="card app-card contribution-body" id="con">
                                        <span class="card-title heading">{contribution.Type}</span>
                                        <div class="divider"></div>
                                        <div class="card-content">
                                            <span class="card-title heading">{contribution.Organization}</span>
                                            <p class="para">{contribution.Description}</p><br />
                                            <span class="con-time">{contribution.Time}</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div class="con-links">
                    <a id="left-button">
                        <i class="large material-icons arrow-color">keyboard_arrow_left</i>
                    </a>
                    <a id="right-button" class="con-btn-right">
                        <i class="large material-icons arrow-color">keyboard_arrow_right</i>
                    </a>
                </div>

            </div>
        )
    }
}

export default Contribution;