import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import { HTML5Backend } from 'react-dnd-html5-backend'



ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
