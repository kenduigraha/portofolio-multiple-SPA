import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as AppActions from '../../../../actions';
import { Redirect } from 'react-router-dom';
import HeaderLayout from '../../../Layout/Header';
import DetailCharacterSection from './Section';
import FooterLayout from '../../Footer';
import '../../../App.css';

class DetailCharacter extends Component {
    componentDidMount() {
        const { params } = this.props.match;
        const characterId = params.id;
        this.props.actions.loadDetailMarvelChar(characterId);
    }

    render() {
        const { isExact } = this.props.match;
        const { error } = this.props.data;
        
        return (
            <div id="content" >
                {
                    !isExact ?
                    <Redirect to="/" /> :
                    error ?
                    <div>
                        <h1>
                            404
                        </h1>
                        <Redirect to="/" />
                    </div> :
                    <div className="App">
                        <HeaderLayout />
                        <DetailCharacterSection data={this.props.data} />
                        <FooterLayout />
                    </div>
                }
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
      data: state.reducersGetMarvelChars
    }
  }
  
  let mapDispatchToProps = (dispatch) => {
    return {
      actions : bindActionCreators(AppActions, dispatch)
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(DetailCharacter)
  