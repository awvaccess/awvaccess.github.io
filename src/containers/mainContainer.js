import React from "react";
import { connect } from "react-redux";

//import logo from '../logo.svg';
import '../App.css';
import Results from '../components/results';
import Welcome from '../components/welcome';

class MainContainer extends React.Component {
  render() {
    const {
      welcome,
      loading,
    } = this.props;
    return (
      <div className="App">
        {loading ?
          <div className="lds-css ng-scope">
            <div className="lds-spinner" style={{height:"100%"}}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
          </div>
        :
          welcome ?
            <Welcome />
          :
            <Results /> 
        }
      </div>
    );
  }
}

const mS = state => {
  return {
    welcome: state.results.welcome,
    loading: state.results.loading,
  };
};

const mD = {};

export default connect(mS, mD)(MainContainer);