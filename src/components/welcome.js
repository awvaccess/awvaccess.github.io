import React from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { update } from '../reducers/resultsReducer';
import logo from '../img/awvsolo.png';
import ucvlogo from '../img/ucv-logo.svg';
import cienciaslogo from '../img/ciencias_logo.jpg';

class Welcome extends React.Component {

	render() {
		return (
			<div className="App-welcome">
				<div className="App-imgWrapper">
					<Link
					to={'/about'}
					>
						<div className="App-img">
							<img
							src={ logo }
							alt="Logo del Archivo Web"
						/>
							<span>Archivo Web de Venezuela</span>
						</div>
					</Link>
					<a
					href='http://www.ucv.ve/'
					>
						<div className="App-img">
							<img
							src={ ucvlogo }
							alt="Logo del UCV"					
							/>
							<span>Universidad Central de Venezuela</span>						
						</div>
					</a>
					<a
					href='http://www.ciens.ucv.ve/ciens/'
					>
						<div className="App-img">
							<img
							src={ cienciaslogo }
							alt="Logo de la Facultad de Ciencias"					
							/>
							<span>Facultad de Ciencias UCV</span>						
						</div>
					</a>
					
				</div>
			</div>
		)
	}
}

const mS = state => {
	return {
	};
};

const mD = {
	update
};

export default connect(mS, mD)(Welcome);