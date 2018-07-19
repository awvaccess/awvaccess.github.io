import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import {
  Route,
  Router,
  IndexRoute,
  browserHistory,
  Redirect
} from "react-router";

import LandingContainer from "./containers/landingContainer";
import modulesContainer from "./containers/modulesContainer";
import coursesContainer from "./containers/coursesContainer";
import resourcesContainer from "./containers/resourcesContainer";
import app from "./styles/app.styl";
//load foundation
//require('style-loader!css-loader!foundation-sites/dist/foundation.min.css');

const store = require("./store/configureStore").configure();

const courses = () => {
  return <p>Hey there</p>;
};

//App css

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={LandingContainer}>
        <Route path="Course/:_courseId/" component={modulesContainer} />
        <Route path="Course/:_courseId/Module/:_moduleId/" component={modulesContainer} />
        <Route path="Course/:_courseId/Module/:_moduleId/Slide/:_slideId/" component={modulesContainer} />
        <Route path="Resources" component={resourcesContainer} />
        <IndexRoute component={coursesContainer} />
      </Route>
      <Redirect from="*" to="/" />
    </Router>
  </Provider>,
  document.getElementById("app")
);
