/*
 * @Author: Fullsize
 * @Date: 2021-09-15 17:19:25
 * @LastEditors: Fullsize
 * @LastEditTime: 2021-09-29 15:14:11
 * @FilePath: /react-context/src/index.tsx
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import './index.css';
import App from './App';
import RootStore from './stores/root';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from 'react-router-dom';
import RootContext from './stores/root_contxt'
ReactDOM.render(
  <RootContext.Provider value={new RootStore()}>

    <React.StrictMode>
      <HashRouter>
        <Router history={createBrowserHistory()}>
          <App />
        </Router>
      </HashRouter>
    </React.StrictMode>

  </RootContext.Provider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
