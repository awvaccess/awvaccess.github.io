import React from 'react';
import { connect } from 'react-redux';
import {Calendar, CalendarControls} from 'react-yearly-calendar';
import moment from 'moment';

import { update, site } from '../reducers/resultsReducer';

class Results extends React.Component {
  constructor(props) {
    super(props);

    const today = moment();
      this.state = {
      year: 0,
      selectedDay: today,
      firstDayOfWeek: 0,
      customCSSclasses: {},
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
    const { content } = this.props;
    let latestYear = 0;
    if(content.type === 'url'){
      for(let i = 0; i < content.list.length; i++){
        if (latestYear < parseInt(content.list[i].substring(0, 4), 10)){
          latestYear = parseInt(content.list[i].substring(0, 4), 10);
        }
      }
      const customCSSclasses = {
        holidays: content.list
      }
      this.setState({
        customCSSclasses,
        year: latestYear
      });
    }
    
  }
  
  render() {
    const {
      year,
      selectedDay,
      firstDayOfWeek,
      customCSSclasses
    } = this.state;
    const {
      content
    } = this.props;
    return (
      <div className='App-results'>
        <div className='App-text'>
          <h1>Búsqueda: <b>{content.type === 'url' ? content.url : content.keywords }</b></h1>
          <h4>Resultados: {content.versions}</h4>
          { content.type === 'url' ?
            <div className='App-url-results'>
              <div className='App-list'>
                {content.list.map( (version, index) =>
                <li
                  className='App-link'
                  key={index}
                  onClick={() =>
                      this.props.site({ 'site_version': content.warcList[index] + '/' + content.urlsList[index] })
                  }
                >
                  {version} | 
                  {' ' +content.urlsList[index]}
                </li>
                )}
              </div>
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
                  firstDayOfWeek={firstDayOfWeek}
                  onPickDate={date => this.datePicked(date)}
                  customClasses={customCSSclasses}
                />
              </div>
            </div>
          :
            <div className='App-keyword-results App-list'>
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
        </div>
      </div>
    )
  }
}

const mS = state => {
  return {
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