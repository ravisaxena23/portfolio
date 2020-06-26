import React, { Component } from 'react';
import firebase from "firebase";
import firestore from "./Firestore";
class App extends Component {


    state = {
      portfolio: null
    }
  

    componentDidMount() {
      const db = firebase.firestore();
      db.collection("users")
        .get()
        .then(querySnapshot => {
          const data = querySnapshot.docs.map(doc => doc.data());
          console.log(data);
          this.setState({ users: data });
        });
    }

  render() {
    return(
      <div>
     <h1>fuck</h1>
     {
       this.state.portfolio &&
       this.state.portfolio.map(portfolio=>{
         return(
           <div>
             <p></p>
           </div>
         )
       })
     }
    </div>
    )
  }
}

export default App;