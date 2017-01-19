import React from 'react';

import Notifications from './notifications';


export default class ActivityPanel extends React.Component {


  render() {
    return (
      <div className="left-panel panel">
        <h1 className="user-greeting">Hello <br></br>Aly</h1>
        <Notifications />
      </div>
    )
  }
}
