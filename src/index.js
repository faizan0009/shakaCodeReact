import React from 'react';
import { render} from 'react-dom';
import { Provider } from 'react-redux';
import store from './core/store';
import Routes from './routes';
import 'semantic-ui-css/semantic.min.css';
import './index.css';



const target = document.querySelector('#root');



const renderApp = () => {
    render(
      <Provider store={store}>
          <Routes />
      </Provider>,
      target
    );
  };


  renderApp();