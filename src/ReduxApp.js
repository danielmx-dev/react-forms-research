import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { configureStore } from './store';

import FormikContainer from './FormikContainer';

const store = configureStore();

class ReduxApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <FormikContainer />
      </Provider>
    );
  }
}

export default ReduxApp;
