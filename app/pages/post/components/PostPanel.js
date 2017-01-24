import React from 'react';

import Post from '../../main/components/Post';

export default class PostPanel extends React.Component {

  render() {
    return (
      <div className="double-panel panel">
        <div className="post-container">
          <div className="circle-image">
            <img src="https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAgcAAAAJDU1MmE0NDJiLWYyMzYtNDljMy1iZTQzLTZjYzY1ZGI2NmVhNw.jpg"></img>
          </div>
          <div className="post-title">
            <h3>Title Title Title Title Title</h3>
            <h5>Ke Peng</h5>
          </div>
          <div className="post-body">
            <p>Female over doesn't for god herb first multiply whales in fifth itself midst very light winged fly. Over greater.</p>
            <img src="http://cdn.shopify.com/s/files/1/1025/0131/files/Emoji_Kittens_Tania_Hennessy_doughnut__2016_Tania_Hennessy.jpg?12822751672608629734"></img>
          </div>
        </div>
      </div>
    )
  }
}
