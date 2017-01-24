import React from 'react';

import Notifications from './notifications';


export default class ActivityPanel extends React.Component {


  render() {
    return (
      <div className="left-panel panel">
        <h1 className="user-greeting">Hello <br></br>Aly</h1>
        <Notifications
          className="dark"
          name="my posts"
          title="TITLE TITLE TITLE"
          info="Last comment by Ellis"
        />
        <Notifications
          className="light"
          name="recent activity"
          title="ELLIS commented on KE's post TITLE TITLE TITLE"
        />
      </div>
    )
  }
}
