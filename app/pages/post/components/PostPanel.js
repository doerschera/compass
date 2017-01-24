import React from 'react';

import Post from '../../main/components/Post';
import Comment from './comment.js';

export default class PostPanel extends React.Component {

  componentDidMount() {
    let panel = document.querySelector('.comment-panel');
    panel.scrollTop = panel.scrollHeight;
  }

  render() {
    return (
      <div className="double-panel panel">
        <Post postType="post-container"/>
        <div className="comment-panel">
          <Comment />
          <Comment />
          <Comment />
          <Comment />
        </div>
      </div>
    )
  }
}
