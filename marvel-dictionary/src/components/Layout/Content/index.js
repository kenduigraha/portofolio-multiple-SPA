import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
const { Content } = Layout;


const ContentLayout = (props) => {
    return (
        <Content style={{ padding: '0 50px', backgroundColor: 'yellow' }}>
            <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>Content</div>
        </Content>
    )
}

export default ContentLayout;