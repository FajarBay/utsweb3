import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
const items = [
 {
      color : 'Light',
  },
  {
    color : 'Dark',
  },
];

ReactDOM.render(<App items={items}/>,
  document.getElementById('root')
);
serviceWorker.unregister();
