import React from 'react';
import ReactDOM from 'react-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import customTheme from 'material-ui/styles/baseThemes/customTheme';
import { Card, CardHeader } from 'material-ui/card';

class App extends React.Component {

  render () {
    return (
      <h1>Hello World</h1>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
