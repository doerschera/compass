import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import ActivityPanel from './components/activity-panel';
import PostFeed from './components/PostFeed';
import AddPostPanel from './components/AddPostPanel';

export default class Main extends React.Component {

  render() {
    return (
      <div>
        <ActivityPanel />
        <PostFeed />
        <MuiThemeProvider>
          <AddPostPanel />
        </MuiThemeProvider>
      </div>
    )
  }
}
