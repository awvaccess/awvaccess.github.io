import React from 'react';

import Results from '../components/results';
import Welcome from '../components/welcome';

const Body = (PassedComponent) => {
    return class extends React.Component {
        render(){
            return (
                <div>
                    <PassedComponent {...this.props}/>
                </div>
            )
        }
    }
}

const mS = state => {
    return {
      loading: state.results.loading,    
    };
  };
  
  const mD = {};  

export default Body;
