import React from 'react';
import { Layout } from 'antd';
import CarouselComponent from './Carousel';
import CharactersComponent from './Characters';
const { Content } = Layout;

const ContentLayout = (props) => {
    return (
        <Content style={{ background: '#e23636', minHeight: 500, marginTop: '64px' }}>
            <CarouselComponent />
            <CharactersComponent />
        </Content>
    )
}

export default ContentLayout;