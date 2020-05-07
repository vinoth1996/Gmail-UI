import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const styles = {
    root: {
        width: '100%',
    },
};

class Expansion extends Component {
    render(){
        return(
            <div className={this.props.classes.root}>
            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-label="Expand"
                aria-controls="additional-actions1-content"
                id="additional-actions1-header"
              >
                <Typography color={this.props.status === "unread" ? "inherit" : "primary"} variant="subtitle1" noWrap><Checkbox />{this.props.subject}</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <List>
                    <ListItem>
                        <ListItemText>From: {this.props.from}</ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemText>To: {this.props.to}</ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemText>Message: {this.props.message}</ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemText>Date: {this.props.date}</ListItemText>
                    </ListItem>
                </List>    
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <br/>
            </div>            
        )
    }
}

export default withStyles(styles)(Expansion)