import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import Main from '../pages/main/main';
import Post from '../pages/post/Post'

module.exports = (
  <Router history={browserHistory}>
    <Route path="/" component={Main} />
    <Route path="/post" component={Post}>
      <Route path="/:postId" component={Post} />
    </Route>
  </Router>
)
