import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, Col, Row, Icon, Avatar, Button } from 'antd';
import * as AppActions from '../../../../actions';
import CharactersCard from './Cards';
import FilterCharactersComponent from './Filter';
const { Meta } = Card;

class CharactersComponent extends Component {
  constructor(props) {
    super(props);
    this.state={
      limit: 8,
      offset: 0,
    }
  }

  componentWillMount() {
    this.props.actions.loadMarvelChars(this.state.limit, this.state.offset);
    
  }

  render() {
    return (
        <div style={{ background: '#ECECEC', padding: '30px' }}>
          {
            this.props.getMarvelChars.loading ?
            <Button shape="circle" loading /> :
            <div>
              <div dangerouslySetInnerHTML={{__html: this.props.getMarvelChars.payload.attributionHTML}}></div>
              <FilterCharactersComponent />
              <Row gutter={24}>
                {
                  this.props.getMarvelChars.payload.data.results.map(char => {
                    return <CharactersCard key={char.id} data={char} />
                  })
                }
              </Row>
              <div>
                {this.props.getMarvelChars.payload.copyright}
              </div>
            </div>
          }
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
