import React, { Component } from 'react';

import firestore from "../../Firestore";
import firebase from "firebase"

class App extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            fullname: ""
        };
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }
    onSubmit = e => {
        e.preventDefault();
        const db = firebase.firestore();
        const form = {
            name: this.state.fullname,
            email: this.state.email
        }
        const userRef = db.collection("users").add(form);
        this.setState({
            fullname: "",
            email: ""
        });
    };
    render() {
        return (
            <form>
                <input
                    type="text"
                    name="fullname"
                    placeholder="Full name"
                    value={this.state.fullname}
                    onChange={e => this.handleChange(e)}
                />
                <input
                    type="text"
                    name="email"
                    placeholder="Full name"
                    value={this.state.email}
                    onChange={e => this.handleChange(e)}
                />
                <button type="submit" onClick={(e) => this.onSubmit(e)}>Submit</button>
            </form>
        );
    }

}

export default App;