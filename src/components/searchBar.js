import React from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { update, submit, submitjson } from "../reducers/resultsReducer";
import '../App.css';

class SearchBar extends React.Component {
  handleKeyPress = (event) => {
    if(event.key == 'Enter'){
      this.props.submitjson({ 'query': this.refs.query.value });
      update({
        query: this.refs.query.value,
        header: false,
      });
      window.scrollBy(0, 800);
    }
  }
  handleSubmit = (event) => {
    this.props.submitjson({ 'query': this.refs.query.value });
    update({
      query: this.refs.query.value,
      header: false,
    });
  }
  render() {
    const {
      update,
    } = this.props;
    return (
      <div className="App-bar"
      >
        <input
          type="text"
          ref="query"
          onKeyPress={this.handleKeyPress}
        />
        <Link
          to={'/'}
        >
          <button
            type="submit"
            onClick={this.handleSubmit}
            className="App-submit"
          >
            Buscar
          </button>
        </Link>
      </div>
    )
  }
}

const mS = state => {
  return {
    query: state.results.query,
    content: state.results.content,
  };
};

const mD = {
  update,
  submit,
  submitjson,
};

export default connect(mS, mD)(SearchBar);