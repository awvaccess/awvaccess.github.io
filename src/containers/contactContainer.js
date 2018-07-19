import React from "react";
import { connect } from "react-redux";

import { update } from '../reducers/resultsReducer';

class ContactContainer extends React.Component {
  componentWillMount(){
    this.props.update({header: false});
  }

  render() {
    return (
      <div className="App-contact">
        <div className="App-form">
          <h1 className="App-title">Contáctanos</h1>
          <input type="text" placeholder="Nombre"/>
          <input type="email" placeholder="Email"/>        
          <textarea placeholder="Mensaje personalizado" rows="4" />
          <input type="submit" />          
        </div>

      </div>
    );
  }
}

const mS = state => {
  return {};
};

const mD = {
  update,
};

export default connect(mS, mD)(ContactContainer);