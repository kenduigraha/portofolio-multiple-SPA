import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Card, Col, Row, Icon, Avatar } from "antd";
import * as AppActions from "../../../../actions";
import CharactersCard from "./Cards";
import FilterCharactersComponent from "./Filter";
import CharactersLoading from "./Loading";
const { Meta } = Card;

class CharactersComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      limit: 8,
      offset: 0
    };
  }

  componentWillMount() {
    this.props.actions.loadMarvelChars(this.state.limit, this.state.offset);
  }

  componentWillReceiveProps(nextProps) {
    document.addEventListener("scroll", this.trackScrolling);
  }

  isBottom(el) {
    return el.getBoundingClientRect().bottom <= window.innerHeight;
  }

  trackScrolling = () => {
    const wrappedElement = document.getElementById("content");
    if (this.props.getMarvelChars.loading === false && this.isBottom(wrappedElement)) {
      this.props.actions.updateFlagInfinityMarvelChars(true);
      if (this.props.getMarvelChars.infinity === true) {
        this.setState({
          limit: this.state.limit + 4
        });
        this.props.actions.loadMarvelChars(this.state.limit, this.state.offset);
      }
    }
  };

  render() {
    return (
      <div id="content" style={{ background: "#ECECEC", padding: "30px" }}>
        {this.props.getMarvelChars.infinity === false &&
        this.props.getMarvelChars.loading === true ? (
          <CharactersLoading />
        ) : (
          <div>
            <div
              dangerouslySetInnerHTML={{
                __html: this.props.getMarvelChars.payload.attributionHTML
              }}
            />
            <FilterCharactersComponent />
            <Row gutter={24}>
              {this.props.getMarvelChars.payload.data.results.map(char => {
                return <CharactersCard key={char.id} data={char} />;
              })}
              {
                this.props.getMarvelChars.infinity === true &&
                <CharactersLoading />
              }
            </Row>
            <div>{this.props.getMarvelChars.payload.copyright}</div>
          </div>
        )}
      </div>
    );
  }
}

// export default App;
let mapStateToProps = state => {
  return {
    getMarvelChars: state.reducersGetMarvelChars
  };
};

let mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(AppActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  CharactersComponent
);
