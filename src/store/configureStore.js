import * as redux from "redux";
import thunk from "redux-thunk";
// Import reducers here
import { resultsReducer } from "../reducers/resultsReducer";

export const configure = (initialState = {}) => {
  const reducer = redux.combineReducers({
    results: resultsReducer
  }); // Combine reducers here

  const store = redux.createStore(
    reducer,
    initialState,
    redux.compose(
      redux.applyMiddleware(thunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );

  return store;
};
