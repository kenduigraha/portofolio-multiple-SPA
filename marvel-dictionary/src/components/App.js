import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as AppActions from '../actions';
import HeaderLayout from './Layout/Header';
import ContentLayout from './Layout/Content';
import FooterLayout from './Layout/Footer';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // this.props.actions.loadMarvelChars();
  }

  render() {
    return (
      <div className="App">
        <HeaderLayout />
        <ContentLayout />
        <FooterLayout />
      </div>
    );
  }
}

// export default App;
let mapStateToProps = (state) => {
  return {
    getMarvelChars: state.reducersGetMarvelChars
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    actions : bindActionCreators(AppActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
