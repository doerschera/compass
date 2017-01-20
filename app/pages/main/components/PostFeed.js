import React from 'react';
import PostPreview from './PostPreview';

export default class PostFeed extends React.Component {

  render() {
    return (
      <div className="middle-panel panel">
        <PostPreview />
        <PostPreview />
      </div>
    )
  }
}
