import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
const { Footer } = Layout;


const FooterLayout = (props) => {
    return (
        <Footer style={{ textAlign: 'center' }}>
            Marvel Dictionary v1.0.0
        </Footer>
    )
}

export default FooterLayout;