import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Hidden from '@material-ui/core/Hidden';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import DraftIcon from '@material-ui/icons/Drafts';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SentIcon from '@material-ui/icons/Send';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import TrashIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { TextField } from '@material-ui/core';
import Mails from './ExpansionList';

const drawerWidth = 240;

const styles = (theme) => ({
    root: {
        display: 'flex'
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
          display: 'none',
        },
    },  
    drawerPaper: {
        width: drawerWidth,
    },  
    appBar: {
        [theme.breakpoints.up('sm')]: {
          width: `calc(100% - ${drawerWidth}px)`,
          marginLeft: drawerWidth,
        },
    }, 
    toolbar: theme.mixins.toolbar,
    drawer: {
        [theme.breakpoints.up('sm')]: {
          width: drawerWidth,
          flexShrink: 0,
        },
    }, 
    content: {
        flexGrow: 1,
        padding: theme.spacing(2),
    },      
});

class Navigation extends Component {
    constructor(){
        super()
        this.state = {
            mobileOpen: false,
            openDialog: false,
            mailType: ""
        }
    }

    handleDrawerToggle = () => {
        this.setState({
            mobileOpen: !this.state.mobileOpen
        })  
    };

    handleDialogOpen = () => {
        this.setState({
            openDialog: !this.state.openModal
        })  
    }

    handleDialogClose = () => {
        this.setState({
            openDialog: false
        })  
    }

    render() {
        const drawer = (
            <div>
                <div className={this.props.classes.toolbar} />
                <Divider />
                <List>
                    <ListItem button onClick={() => this.setState({ mailType: "Inbox" })}>
                        <ListItemIcon><InboxIcon /></ListItemIcon>
                        <ListItemText>Inbox</ListItemText>
                    </ListItem>
                    <ListItem button onClick={() => this.setState({ mailType: "Sent" })}>
                        <ListItemIcon><SentIcon /></ListItemIcon>
                        <ListItemText>Sent</ListItemText>
                    </ListItem>
                    <ListItem button onClick={() =>this.setState({ mailType: "Draft" })}>
                        <ListItemIcon><DraftIcon /></ListItemIcon>
                        <ListItemText>Draft</ListItemText>
                    </ListItem>
                    <ListItem button onClick={() => this.setState({ mailType: "Trash" })}>
                        <ListItemIcon><TrashIcon /></ListItemIcon>
                        <ListItemText>Trash</ListItemText>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon><ExitToAppIcon /></ListItemIcon>
                        <ListItemText>Logout</ListItemText>
                    </ListItem>
                </List>
            </div>
        )

        const dialog = (
            <Dialog fullScreen
                open={this.state.openDialog}
                onClose={this.handleDialogClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent>
                    <TextField fullWidth required id="To" margin="normal" label="To" />
                    <TextField fullWidth id="Subject" margin="normal" label="Subject" />
                    <TextField
                        fullWidth
                        margin="normal"
                        id="EmailMessage"
                        multiline
                        rows={10}
                        label="Your Message...."
                        variant="filled"
                    />
                </DialogContent>
                <DialogActions>
                    <Button color="primary" onClick={this.handleDialogClose}>
                        Send
                    </Button>
                    <Button color="primary" onClick={this.handleDialogClose} autoFocus>
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        )
        
        return(
            <div className={this.props.classes.root}>
                <CssBaseline />
                <AppBar position="fixed" className={this.props.classes.appBar}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={this.handleDrawerToggle}
                            className={this.props.classes.menuButton}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h5" noWrap>
                            Mailbox
                        </Typography>
                        <IconButton color="inherit" onClick={this.handleDialogOpen} disableFocusRipple disableRipple>
                            <AddIcon /><Typography variant="h6">Compose</Typography>
                        </IconButton>
                        {dialog}
                    </Toolbar>
                </AppBar>
                <nav className={this.props.classes.drawer} aria-label="mailbox folders">
                    <Hidden smUp implementation="css">
                        <Drawer
                            // container={container}
                            variant="temporary"
                            open={this.state.mobileOpen}
                            onClose={this.handleDrawerToggle}
                            classes={{
                                paper: this.props.classes.drawerPaper,
                            }}
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>
                    <Hidden xsDown implementation="css">
                        <Drawer
                            classes={{
                                paper: this.props.classes.drawerPaper,
                            }}
                            variant="permanent"
                            open
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>
                </nav>
                <main className={this.props.classes.content}>
                    <div className={this.props.classes.toolbar} />
                    <Mails type={this.state.mailType} />                        
                </main>
            </div>
        )
    }
}

export default withStyles(styles)(Navigation)