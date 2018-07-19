import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {Motion, spring} from 'react-motion';

import '../App.css';
import SearchBar from '../components/searchBar';
import logoHeader from '../img/awv_logo_header.png';
import { clear, update } from "../reducers/resultsReducer";

class Header extends React.Component {
	handleMouseDown = () => {
		const {
			update,
			header,
		} = this.props;
		if (header)
			update({header: false});
	};

	handleTouchStart = (e) => {
		e.preventDefault();
		this.handleMouseDown();
	};

	render() {
    const {
			header,
			clear
    } = this.props;
    return (
			<div className="App-header">
				<div className="App-upperheader">
					<Link
						to={'/'}
					>
						<img
							className="App-logo"
							src={ logoHeader }
							onClick={
								() =>{
									clear();
								}
							}
							alt="Logo AWV"
						/>
					</Link>
					<nav
						className="App-upperheader-menu"
					>
						<Link							
							to={'/about'}
						>
							¿Quiénes somos?
						</Link>
						<Link
							to={'/contact'}
						>
							Contacto
						</Link>
						<Link
							to={'/login'}					
						>
							Iniciar sesión
						</Link>
					</nav>
				</div>
				<Motion style={{x: spring(header ? 87 : 12)}}>
					{({x}) =>
						<div
							className="App-subheader"
							style={{
								minHeight: `${x}vh`,
							}}
						>
							<div
								className="App-subheader-message"
								style={{
									display: header ? "initial" : "none",
								}}
							>
									<h3>Archivo Web de Venezuela</h3>
									<p>
										En nuestro archivo hay almacenadas múltiples páginas de origen venezolano, siéntete libre de explorar:
									</p>
							</div>
							<SearchBar />
						</div>
					}
		  		</Motion>
				
			</div>
    );
  }
}

const mS = state => {
  return {
    header: state.results.header,	  
  };
};

const mD = {
	clear,
	update,
};

export default connect(mS, mD)(Header);