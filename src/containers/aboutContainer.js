import React from 'react';
import { connect } from 'react-redux';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import { update } from '../reducers/resultsReducer';


class contentContainer extends React.Component {
  componentWillMount(){
    this.props.update({header: false});
  }
  render() {
    return (
      <div className='App-about'>
        <Tabs>
          <TabList className='App-tabs' style={{
            display: 'flex',
            justifyContent: 'space-between',
            borderBottom: '3px solid #193a5c',
            borderTop: '3px solid #193a5c',
            borderRadius: '50px',
            paddingLeft: '0',
          }} >
            <Tab>
              ¿Qué es?
            </Tab>
            <Tab>
              Equipo
            </Tab>
            <Tab>
              Trabajos Relacionados
            </Tab>
          </TabList>

          <TabPanel>
          <div className='App-text'>
              <h1
                className='App-title'
              >
                Archivo Web de Venezuela
              </h1>
              <h2
                className='App-subtitle'              
              >
                Bienvenido, en este portal usted podrá acceder a los sitios web que han sido archivados en el Archivo Web de Venezuela.
              </h2>
              <p>El sitio que está visitando es un sistema desarrollado en JavaScript, con las librerías React y Redux que tiene la funcionalidad de renderizar los documentos HTML que son proporcionados por una API de un sistema desarrollado con el framework Django de Python, la idea es que este se comunique con el módulo de almacenamiento así como con el módulo de indexación. el cual es una instalación de SolrCloud interactuando con otro sistema de Hadoop. La información recibida es luego procesada en este sistema a través de un módulo de NPM llamado React-render-html </p>
              <p>En un aspecto académico, el propósito de ésto es que haga la función de módulo de acceso para el primer Archivo Web de Venezuela</p>
              <h3
                className='App-title'        
              >
                Motivación
              </h3>            
              <p>Este módulo es el Trabajo Especial de Grado del Br. Luis Daniel Cartillo y el Archivo Web es a su vez la tesis doctoral de Mercy Ospina</p>
            </div>
          </TabPanel>
          <TabPanel>
            Equipo  
          </TabPanel>
          <TabPanel>
            Trabajos
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

const mS = state => {
  return {};
};

const mD = {
  update
};

export default connect(mS, mD)(contentContainer);