import React, { Component } from 'react';
import HeaderLayout from '../Layout/Header';
import '../App.css';
import '../Layout/Header/header.css';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // this.props.actions.loadMarvelChars();
  }

  render() {
    console.log(this.props);
    return (
      <div className="App">
        <HeaderLayout />
        <p className="App-intro">
          Credit Page
        </p>
      </div>
    );
  }
}
