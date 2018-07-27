import React from 'react';
import { connect } from 'react-redux';
import renderHTML from 'react-render-html';

class HtmlRenderizer extends React.Component {
  render() {
    const {
        html,
      } = this.props;
    return (
        <div className='App-html'>
            {renderHTML(html)}
        </div>
        )
    }
}

const mS = state => {
  return {
    html: state.results.html,
  };
};

const mD = {
};

export default connect(mS, mD)(HtmlRenderizer);