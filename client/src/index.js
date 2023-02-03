import React from 'react';
import ReactDOM from 'react-dom/client';
import { ConfigProvider, theme } from 'antd';
import 'antd/dist/reset.css';
import './assets/styles.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ConfigProvider
    theme={{
      algorithm: theme.defaultAlgorithm,
    }}
  >
    <App />
  </ConfigProvider>
);
