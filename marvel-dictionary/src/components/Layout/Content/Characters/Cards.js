import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { Card, Col, Row, Icon, Avatar } from 'antd';
const { Meta } = Card;

const CharactersCard = (props) => {
    return (
        <Col
            span={6} xxl={6} xl={6} lg={8} md={12} sm={24} xs={24}
            style={{ marginBottom: '20px'}}>
            <Link to={`/character/${props.data.id}`}>
                <Card
                loading={props.loading}
                    cover={<img alt={props.data.name}
                    width='323'
                    height='323'
                    src={`${props.data.thumbnail.path}.${props.data.thumbnail.extension}`} />}
                >
                    <Meta
                        avatar={<Avatar src={`${props.data.thumbnail.path}.${props.data.thumbnail.extension}`} />}
                        title={props.data.name}
                    />
                </Card>
            </Link>
        </Col>
    )
}

export default CharactersCard;