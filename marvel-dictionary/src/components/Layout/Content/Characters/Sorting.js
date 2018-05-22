import React, { Component } from 'react';
import { Menu, Dropdown, Icon } from 'antd';


export default class SortingCharacters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
        };
    }

    handleMenuClick = (e) => {
        let key = e.key;
        this.setState({ visible: false });
        this.props.changeOrderBySort(key);
    }

    handleVisibleChange = (flag) => {
        this.setState({ visible: flag });
    }

    render() {
        const menu = (
            <Menu onClick={this.handleMenuClick}>
                <Menu.Item key="name">Name A-Z (Ascending)</Menu.Item>
                <Menu.Item key="-name">Name Z-A (Descending)</Menu.Item>
                <Menu.Item key="modified">Newest Characters</Menu.Item>
                <Menu.Item key="-modified">Longest Characters</Menu.Item>
            </Menu>
        );
        return (
            <div 
                style={{float: 'right'}}>
                <Dropdown
                    overlay={menu}
                    onVisibleChange={this.handleVisibleChange}
                    visible={this.state.visible}
                >
                    <a className="ant-dropdown-link" href="javascript:void(0)">
                    Sort <Icon type="down" />
                    </a>
                </Dropdown>
            </div>
        );
    }
}
