import React from 'react';

export default class Notifications extends React.Component {

  render() {
    return (
      <div>
        <h5 className="notification-name">my posts</h5>

        <div className="notification-box dark">
          <h4 className="notification-title dark">Title title title</h4>
          <p className="notification-info dark">Latest Comment By: Ellis Marksohn</p>
        </div>
      </div>
    )
  }
}
