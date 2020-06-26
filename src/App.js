import React from 'react';
import firebase from "firebase";
import firestore from "./Firestore";
import Stack from "./components/Stack"
import Message from "./components/Message"

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Stack />
        <Message />
      </div>
    )
  }
}

export default App;
