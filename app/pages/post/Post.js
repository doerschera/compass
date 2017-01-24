import React from 'react';

import ActivityPanel from '../main/components/activity-panel';
import PostPanel from './components/PostPanel';

export default class Post extends React.Component {

  render() {
    return (
      <div>
        <ActivityPanel />
        <PostPanel />
      </div>
    )
  }
}
