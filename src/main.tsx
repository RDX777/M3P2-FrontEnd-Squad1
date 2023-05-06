import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { AuthProvider } from './contexts/Auth/AuthProvider';
import { ModalProvider } from './contexts/Modal/ModalProvider';
import { store } from './redux/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <ModalProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </ModalProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
