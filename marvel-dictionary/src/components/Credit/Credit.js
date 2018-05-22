import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Layout } from 'antd';
import HeaderLayout from '../Layout/Header';
import FooterLayout from '../Layout/Footer';
import '../App.css';
const { Content } = Layout;

const Credit = (props) => {
  const { isExact } = props.match;
  return(
    <div>
        {
          !isExact ?
          <Redirect to="/" /> :
          <div className="App">
              <HeaderLayout />
              <Content style={{ background: '#364d79', minHeight: 500, marginTop: '64px', paddingTop: '20px' }}>
                <a href="http://marvel.com">
                  <h1 style={{ color: '#FFF' }}>
                    Data provided by Marvel. © 2018 MARVEL
                  </h1>
                </a>
                <img
                  src="/images/Marvel-comics-logo-vector.png"
                  width={270} height={125}
                  alt="© 2018 MARVEL"
                />
                <h4 style={{ color: '#FFF' }}>© 2018 MARVEL</h4>
              </Content>
              <FooterLayout />
          </div>
        }
    </div>  
  );
}

export default Credit;