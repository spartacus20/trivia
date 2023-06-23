import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AppProvider } from './context/appContext';
import { AppinitalState, appReducer } from './context/AppReducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider initialState={AppinitalState} reducer={appReducer}>
      <App />
    </AppProvider>

  </React.StrictMode>
);

