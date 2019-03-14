import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HelpIcon from '@material-ui/icons/Help'
import SettingsIcon from '@material-ui/icons/Settings'
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
// TODO: replace account icon with a new icon better suited for sign-in/out?
import AccountIcon from '@material-ui/icons/AccountCircle'

export default function DrawerMenu(props) {
  return (
    <List>
        <ListItem>
            <ListItemIcon>
                <ChevronRightIcon onClick={props.closeDrawer} />
            </ListItemIcon>
        </ListItem>

        <ListItem>
            <ListItemIcon>
                <HelpIcon />
            </ListItemIcon>
            <ListItemText>
                Rules
            </ListItemText>
        </ListItem>

        <ListItem>
            <ListItemIcon>
                <SettingsIcon />
            </ListItemIcon>
            <ListItemText>
                Settings
            </ListItemText>
        </ListItem>

        <ListItem>
            <ListItemIcon>
                <AccountIcon />
            </ListItemIcon>    
            <ListItemText>
                Sign-Out
            </ListItemText>  
        </ListItem>

    </List>
  )
}
