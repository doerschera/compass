import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import Main from '../pages/main/main';
import PostPage from '../pages/post/PostPage'

module.exports = (
  <Router history={browserHistory}>
    <Route path="/" component={Main} />
    <Route path="/post" component={PostPage}>
      <Route path="/:postId" component={PostPage} />
    </Route>
  </Router>
)
