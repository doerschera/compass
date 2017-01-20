import React from 'react';

import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

export default class AddPostPanel extends React.Component {

  render() {
    return (
      <div className="right-panel panel">
        <h1 className="form-title">Create</h1>
        <TextField
          className="single-input"
          hintText="Title"
          hintStyle={{
            fontFamily: "Octanis",
            textTransform: "uppercase",
            letterSpacing: 1
          }}
          multiLine={false}
          underlineFocusStyle={{
            borderColor: 'black'
          }}
          textareaStyle={{
            fontFamily: "Octanis",
            textTransform: "uppercase"
          }}
          underlineStyle={{
            borderColor: 'rgb(109, 110, 113)'
          }}
        />
      <SelectField
        floatingLabelText="Post to Group"
        value=''
        floatingLabelStyle={{
          fontFamily: 'Octanis',
          textTransform: 'uppercase',
          letterSpacing: 1
        }}
        menuItemStyle={{
          fontFamily: 'Octanis',
          textTransform: 'uppercase',
          color: 'rgba(109, 110, 113, 1)'
        }}
        selectedMenuItemStyle={{
          color: 'rgb(0, 0, 0)'
        }}
        underlineFocusStyle={{
          borderColor: 'black'
        }}
        underlineStyle={{
          borderColor: 'rgb(109, 110, 113)'
        }}
        style={{
          fontFamily: 'Octanis',
          textTransform: 'uppercase',
          letterSpacing: 1
        }}
      >
          <MenuItem value={1} primaryText="Group 1" />
          <MenuItem value={2} primaryText="Group 2" />
        </SelectField>
        <h4 className="input-title">Add Images</h4>
        <input type='file'></input>
        <h4 className="input-title">Text</h4>
        <textarea className="add-post-content"></textarea>
        <FlatButton
          label="Submit"
          backgroundColor="rgb(109, 110, 113)"
          hoverColor="rgb(0, 0, 0,)"
          labelStyle={{
            color: 'rgb(255, 255, 255)',
            fontFamily: 'Octanis',
            textTransform: 'uppercase',
            letterSpacing: 1
          }}
          style={{
            borderRadius: 0,
            float: 'right',
            marginTop: 10
          }}
        />
      </div>
    )
  }
}
