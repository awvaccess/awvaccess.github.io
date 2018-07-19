import React from 'react';
import { connect } from 'react-redux';
import renderHTML from 'react-render-html';
import {Calendar, CalendarControls} from 'react-yearly-calendar';
import moment from 'moment';

import { update, site } from '../reducers/resultsReducer';

class Results extends React.Component {
  constructor(props) {
    super(props);

    const today = moment();
      this.state = {
      year: today.year(),
      selectedDay: today,
      firstDayOfWeek: 0
    };
  }
  onPrevYear() {
    this.setState(prevState => ({
      year: prevState.year - 1
    }));
  }

  onNextYear() {
    this.setState(prevState => ({
      year: prevState.year + 1
    }));
  }

  datePicked(date) {
    let dateInput = date._i[0] + '-' + (date._i[1].toString().length > 1 ? '' : '0') + (date._i[1]+1) + '-' + (date._i[2].toString().length > 1 ? '' : '0') + date._i[2];
    if(this.state.customCSSclasses.holidays.indexOf(dateInput) > -1)
      this.props.site({ 'site_version': dateInput })
    this.setState({
      selectedDay: date
    });
  }

  createMarkup() {
    return { __html: this.props.content };
  }

  componentWillMount(){
    let newList=[];
    this.props.content.list.forEach( (version, index) => 
      newList.push(version.substring(0, 10)) 
    )
    const customCSSclasses = {
      holidays: newList
    }
    this.setState({ customCSSclasses });
  }
  
  render() {
    const {
      year,
      selectedDay,
      firstDayOfWeek,
      customCSSclasses
    } = this.state;
    const {
      content,
      html,
    } = this.props;
    return (
      <div className='App-results'>
        <div className='App-text'>
          <h1>Búsqueda: <b>{content.url}</b></h1>
          <h4>Resultados: {content.versions}</h4>
          { content.type === 'url' ?
            <div className='App-url-results'>
              <div id="calendar">
                <CalendarControls
                  year={year}
                  showTodayButton={false}
                  onPrevYear={() => this.onPrevYear()}
                  onNextYear={() => this.onNextYear()}
                />
                <Calendar
                  year={year}
                  selectedDay={selectedDay}
                  showWeekSeparators={false}
                  firstDayOfWeek={firstDayOfWeek}
                  onPickDate={date => this.datePicked(date)}
                  customClasses={customCSSclasses}
                />
              </div>
            </div>
          :
            <div className='App-keyword-results'>
              {content.list.map( (version, index) =>
              <li
                className='App-link'
                key={index}
                onClick={() =>
                    this.props.site({ 'site_version': version })
                }
              >
                {version}
              </li>
              )}
            </div>
          }
          <div className='app'>
            {renderHTML(html)}
          </div>
        </div>
      </div>
    )
  }
}

const mS = state => {
  return {
    html: state.results.html,
    content: state.results.content,
    showExternalHTML: state.results.showExternalHTML
  };
};

const mD = {
  update,
  site
};

export default connect(mS, mD)(Results);

/*
  <div dangerouslySetInnerHTML={this.createMarkup()} >
  </div>
  <div className='app'>
    {renderHTML(this.createMarkup())}
  </div>
*/