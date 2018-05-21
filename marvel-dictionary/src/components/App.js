import React, { Component } from 'react';
import md5 from 'md5';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      marvelBaseEndPoint: process.env.REACT_APP_API_MARVEL_BASE_END_POINT,
      marvelAPIVersion: process.env.REACT_APP_API_MARVEL_VERSION,
      marvelEndPointGetCharacters: `/public/characters`,
      marvelPublicKey: process.env.REACT_APP_API_MARVEL_PUBLIC_KEY,
      marvelPrivateKey: process.env.REACT_APP_API_MARVEL_PRIVATE_KEY,
    }
  }

  componentDidMount() {
    var marvelFullEndPointGetChars = this.state.marvelBaseEndPoint + this.state.marvelAPIVersion
    + this.state.marvelEndPointGetCharacters;

    var date =  new Date();
    var timeStamp = date.getTime();

    var paramsValueGetChars = {
      apikey: this.state.marvelPublicKey,
      ts: timeStamp,
      hash: md5(timeStamp + this.state.marvelPrivateKey + this.state.marvelPublicKey),
    };

    marvelFullEndPointGetChars += `?apikey=${this.state.marvelPublicKey}&ts=${timeStamp}&hash=${md5(timeStamp + this.state.marvelPrivateKey + this.state.marvelPublicKey)}`

    console.log(timeStamp + this.state.marvelPublicKey + this.state.marvelPrivateKey);
    console.log(marvelFullEndPointGetChars);
    console.log(paramsValueGetChars);
    console.log(process.env);

    fetch(marvelFullEndPointGetChars, {
      method: 'GET',
      params: paramsValueGetChars,
    })
    .then(results => {
      console.log(results);
      if (results.status !== 200 ) {
        console.log('Upsss');
        throw Error(`HTTP Status Code is  ${results.status}`);
      }
      return results.json()
    })
    .then(data => {
      if (data.code !== 200) throw Error(`Response Code Data is not 200 !`);
      const dataChars = data.data.results;
      console.log(dataChars);
    })
    .catch(err => {
      console.error(`Ups! Something Happended!`);
      console.error(err);
      // TODO: error handling when fetch API marvel
      // TODO: add logger
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
