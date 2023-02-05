import React from 'react';
import ReactDOM from 'react-dom/client';
import 'antd/dist/reset.css';
import DefaultTheme from './theme/DefaultTheme';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <DefaultTheme>
    <App />
  </DefaultTheme>
);
