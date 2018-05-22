import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, Col, Row, Icon, Avatar } from 'antd';
import * as AppActions from '../../../../actions';
const { Meta } = Card;

class CharactersComponent extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // this.props.actions.loadMarvelChars();
  }

  render() {
    console.log(this.props);
    return (
        <div style={{ background: '#ECECEC', padding: '30px' }}>
          <Row gutter={16}>
            <Col span={6} style={{ marginBottom: '20px'}}>
              <Card
                cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
              >
                <Meta
                  avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                  title="Card title"
                  description="This is the description"
                />
              </Card>
            </Col>
            <Col span={6} style={{ marginBottom: '20px'}}>
              <Card
                cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
              >
                <Meta
                  avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                  title="Card title"
                  description="This is the description"
                />
              </Card>
            </Col>
            <Col span={6} style={{ marginBottom: '20px'}}>
              <Card
                cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
              >
                <Meta
                  avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                  title="Card title"
                  description="This is the description"
                />
              </Card>
            </Col>
            <Col span={6} style={{ marginBottom: '20px'}}>
              <Card
                cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
              >
                <Meta
                  avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                  title="Card title"
                  description="This is the description"
                />
              </Card>
            </Col>
          </Row>
      </div>
    );
  }
}

// export default App;
let mapStateToProps = (state) => {
  return {
    getMarvelChars: state.reducersGetMarvelChars
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    actions : bindActionCreators(AppActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CharactersComponent)
