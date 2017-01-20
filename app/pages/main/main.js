import React from 'react';
import ActivityPanel from './components/activity-panel';
import PostFeed from './components/PostFeed';

export default class Main extends React.Component {

  render() {
    return (
      <div>
        <ActivityPanel />
        <PostFeed />
      </div>
    )
  }
}
