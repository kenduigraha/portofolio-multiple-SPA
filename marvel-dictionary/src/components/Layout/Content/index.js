import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import CarouselComponent from './Carousel';
import CharactersComponent from './Characters';
const { Content } = Layout;

const ContentLayout = (props) => {
    return (
        <Content style={{ background: '#e23636', minHeight: 500 }}>
            <CarouselComponent />
            <CharactersComponent />
        </Content>
    )
}

export default ContentLayout;