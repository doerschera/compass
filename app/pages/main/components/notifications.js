import React from 'react';

export default class Notifications extends React.Component {

  renderInfo() {
    if(this.props.info) {
      return <p className={`notification-info ${this.props.className}`}>{this.props.info}</p>
    } else {
      return null;
    }
  }

  render() {
    return (
      <div>
        <h5 className="notification-name">{this.props.name}</h5>

        <div className={`notification-box ${this.props.className}`}>
          <i className="material-icons">close</i>
          <h4 className={`notification-title ${this.props.className}`}>{this.props.title}</h4>

          {this.renderInfo()}
        </div>
      </div>
    )
  }
}
