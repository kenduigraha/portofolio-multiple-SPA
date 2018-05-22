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
      offset: 0,
      orderBy: 'name',
      cardLoading: false,
    };

    this.handleChangeDataLimit = this.handleChangeDataLimit.bind(this);
    this.handleChangeDataSort = this.handleChangeDataSort.bind(this);
  }

  fetchDataMarvelChars = (limit, offset, orderBy) => {
    this.props.actions.loadMarvelChars(limit, offset, orderBy);
  }

  componentWillMount() {
    this.fetchDataMarvelChars(this.state.limit, this.state.offset, this.state.orderBy);
  }

  componentWillReceiveProps(nextProps) {
    document.addEventListener("scroll", this.trackScrolling);
    if (nextProps.getMarvelChars.infinity === false) {
      this.setState({ cardLoading: !this.state.cardLoading, });
    }
  }
  
  componentWillUpdate(nextProps, nextState) {
    if (this.state.limit !== nextState.limit) {
      this.props.actions.updateFlagInfinityMarvelChars(true);
      this.fetchDataMarvelChars(nextState.limit, this.state.offset, this.state.orderBy);
    }
    if (this.state.orderBy !== nextState.orderBy) {
      this.props.actions.updateFlagInfinityMarvelChars(true);
      this.fetchDataMarvelChars(this.state.limit, this.state.offset, nextState.orderBy);
    }
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
        this.fetchDataMarvelChars(this.state.limit, this.state.offset, this.state.orderBy);
      }
    }
  };

  handleChangeDataLimit(newLimit) {
    this.setState({ limit: Number(newLimit) });
  }

  handleChangeDataSort(orderBy) {
    this.setState({ orderBy: orderBy, cardLoading: true, });
  }

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
            <FilterCharactersComponent
              limit={this.state.limit}
              changeDataLimit={this.handleChangeDataLimit}
              changeDataSort={this.handleChangeDataSort}
            />
            <Row gutter={24}>
              {this.props.getMarvelChars.payload.data.results.map(char => {
                return <CharactersCard loading={this.state.cardLoading} key={char.id} data={char} />;
              })}
            </Row>
              {
                this.props.getMarvelChars.infinity === true &&
                <CharactersLoading />
              }
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
