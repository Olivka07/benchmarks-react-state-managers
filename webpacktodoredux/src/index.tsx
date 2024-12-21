import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { users } from './consts';
import { Provider } from 'react-redux';
import { store } from './store/index';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

localStorage.setItem('users', JSON.stringify(users))

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
