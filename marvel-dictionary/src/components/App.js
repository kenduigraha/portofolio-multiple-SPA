import React from 'react'
import HeaderLayout from './Layout/Header';
import ContentLayout from './Layout/Content';
import FooterLayout from './Layout/Footer';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <HeaderLayout />
      <ContentLayout />
      <FooterLayout />
    </div>
  );
}

export default App;