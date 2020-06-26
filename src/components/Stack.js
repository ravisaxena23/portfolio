import React, { Component } from 'react';
import firebase from "firebase";
import firestore from "../Firestore";
class Stack extends Component {


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
            <div>
                {
                    this.state.stack &&
                    this.state.stack.map(stack => {
                        return (
                            <div>
                                <p>{stack.name}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Stack;