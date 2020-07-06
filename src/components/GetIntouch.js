import React, { Component } from 'react';
import firestore from "../Firestore";
import firebase from "firebase"
import './CSS/GetIntouch.css'

class GetIntouch extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      fullname: "",
      mobileNo: "",
      question: "",
      nameerror: "",
      emailerror: "",
      questionerror: "",
      mobileerror:""
    };
  }
  validate = () => {
    let nameerror = "";
    let emailerror = "";
    let questionerror = "";
    let mobileerror=""
    if (!this.state.fullname) {
      nameerror = "Blank Name";
    }

    if (!this.state.email.includes("@")) {
      emailerror = "Invalid Email";
    }

    if(!this.state.mobileNo){
      mobileerror="Invalid Mobile No";
    }

    if(!this.state.question){
      questionerror="Oops You Forget To Write"
    }

    if (emailerror || nameerror || mobileerror || questionerror) {
      this.setState({ emailerror, nameerror,mobileerror,questionerror });
      return false;
    }

    return true;
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  onSubmit = e => {
    e.preventDefault();
    if (this.validate()==true) {
      console.log("cool")
      const db = firebase.firestore();
      const form = {
        name: this.state.fullname,
        email: this.state.email,
        mobileNo: this.state.mobileNo,
        question: this.state.question
      }
      const userRef = db.collection("users").add(form);
      this.setState({
        fullname: "",
        email: "",
        mobileNo: "",
        question: "",
      });
    }
    else{
      console.log("Fuck")
    }
  };
  render() {
    return (
      <div class="card app-card getintouch-card">
        <h5 class="heading con-color">For any website development contact me</h5>
        <form>
          <div class="row ">
            <div class="col m4 s12">
              <input
                class="getintouch-input browser-default"
                type="text"
                name="fullname"
                placeholder="Full name"
                value={this.state.fullname}
                onChange={e => this.handleChange(e)}
                required
              />
              {this.state.nameerror ? (<div class="form-show">{this.state.nameerror}</div>) : (<div class="form-hide">{this.state.nameerror}</div>)}
            </div>
            <div class="col m4 s12">
              <input
                class="getintouch-input browser-default"
                type="email"
                name="email"
                placeholder="Email"
                value={this.state.email}
                onChange={e => this.handleChange(e)}
              />
              {this.state.emailerror ? (<div class="form-show">{this.state.emailerror}</div>) : (<div class="form-hide">{this.state.emailerror}</div>)}
            </div>
            <div class="col m4 s12">
              <input
                class="getintouch-input browser-default"
                type="text"
                name="mobileNo"
                placeholder="Mobile Number"
                value={this.state.mobileNo}
                onChange={e => this.handleChange(e)}
              />
                {this.state.mobileerror ? (<div class="form-show">{this.state.mobileerror}</div>) : (<div class="form-hide">{this.state.mobileerror}</div>)}

            </div>
            <div class="col m12 s12">
              <textarea
                class="getintouch-input-textarea browser-default"
                type="text"
                name="question"
                placeholder="Type Your Question / Feedback / Request..."
                value={this.state.question}
                onChange={e => this.handleChange(e)}
              />
              {this.state.questionerror ? (<div class="form-show">{this.state.questionerror}</div>) : (<div class="form-hide">{this.state.questionerror}</div>)}
            </div>
          </div>
          <div class="btn-align">
          <a type="submit" onClick={(e) => this.onSubmit(e)}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>Submit</a>
          </div>
        </form>

      </div>

    );

  }

}

export default GetIntouch;