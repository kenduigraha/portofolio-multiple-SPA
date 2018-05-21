import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as AppActions from '../../actions';
import '../App.css';

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
        <header className="App-header">
          <h1 className="App-title">Header</h1>
        </header>
        <p className="App-intro">
          Credit Page
        </p>
      </div>
    );
  }
}
