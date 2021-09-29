/*
 * @Author: Fullsize
 * @Date: 2021-09-15 17:19:25
 * @LastEditors: Fullsize
 * @LastEditTime: 2021-09-29 15:17:49
 * @FilePath: /react-context/src/App.tsx
 */
import React, { lazy, Suspense } from 'react';
// import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import Home from './views'
import routers from '../src/routes';
// import PlayPage from './views/video'
import './App.css';

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          {routers().map((item: { path: string; page: string; }) => (
            <Route key={item.path} exact path={item.path} component={lazy(() => import(`./views/${item.page}`))}>
            </Route>
          ))}
        </Switch>
      </Suspense>
    </div>
    // <>
    //   <Switch>
    //     <Route exact path="/" component={Home} />
    //     <Route exact path="/video" component={PlayPage} />
    //   </Switch>
    // </>
  );
}

export default App;
