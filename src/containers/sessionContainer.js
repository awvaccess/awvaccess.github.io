import React from "react";
import { connect } from "react-redux";

import { update } from '../reducers/resultsReducer';

class SessionContainer extends React.Component {
  componentWillMount(){
    this.props.update({header: false});
  }
  render() {
    return (
      <div className="App-session">
        <div className="App-login">
          <h1 className="App-title">Inicia sesión</h1>                
          <input type="text" placeholder="Nombre" />
          <input type="password" placeholder="Contraseña"/>
          <input type="submit"/>
        </div>
        <div className="App-sign">
          <h1 className="App-title">Regístrate</h1>                
          <input type="text" placeholder="Nombre"/>
          <input type="email" placeholder="Email"/>
          <input type="password" placeholder="Contraseña"/>
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

export default connect(mS, mD)(SessionContainer);