import React from 'react';
import Post from './Post';

export default class PostFeed extends React.Component {

  render() {
    return (
      <div className="middle-panel panel">
        <Post postType='post-panel feed-post'/>
        <Post postType='post-panel feed-post'/>
      </div>
    )
  }
}
