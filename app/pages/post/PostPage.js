import React from 'react';

import ActivityPanel from '../main/components/activity-panel';
import PostPanel from './components/PostPanel';

export default class PostPage extends React.Component {

  render() {
    return (
      <div>
        <ActivityPanel />
        <PostPanel />
      </div>
    )
  }
}
