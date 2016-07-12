import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const Main = () => (
  <MuiThemeProvider>
      <Card>
        <CardHeader
          title="Without Avatar"
          subtitle="Subtitle"
          actAsExpander={true}
          showExpandableButton={true}
          style={{
            fontWeight: 'bold'
          }}
        />
        <CardText expandable={true}>
          Starter
        </CardText>
      </Card>
  </MuiThemeProvider>
);
export default Main;
