import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
const { Header } = Layout;


const HeaderLayout = (props) => {
    return (
        <Layout>
            <Header style={{ position: 'fixed', zIndex: '100', width: '100%' }}>
                <Link to="/">
                    <div className="logo" />
                </Link>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    style={{ lineHeight: '64px', float: 'right' }}
                >
                    <Menu.Item key="1">
                        <Link to="/credit">
                            Credit
                        </Link>
                    </Menu.Item>
                </Menu>
            </Header>
        </Layout>
    )
}

export default HeaderLayout;