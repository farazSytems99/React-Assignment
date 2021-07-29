import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';
import configureStore from './store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createTheme, MuiThemeProvider } from '@material-ui/core';
import { PersistGate } from 'redux-persist/integration/react';

const theme = createTheme({
  spacing: 5,
});

ReactDOM.render(
  <Provider store={configureStore().store}>
    <PersistGate loading={null} persistor={configureStore().persistor}>
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </MuiThemeProvider>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
