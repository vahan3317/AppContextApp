import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles.css';
import { AppProvider } from './context/AppContext'; 

ReactDOM.render(
  <React.StrictMode>
    <AppProvider> 
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
