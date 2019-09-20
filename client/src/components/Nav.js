import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import Genre from './Genre.js'

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import ListIcon from '@material-ui/icons/List';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EventIcon from '@material-ui/icons/Event';

export default class Nav extends Component {
    render() {
        return (
            <nav className="nav-wrapper nav">
                <div className="container">
                    <ListItem button>
                        <ListItemIcon>
                            <ListIcon />
                        </ListItemIcon>
                        <ListItemText primary="Genre" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <AttachMoneyIcon />
                        </ListItemIcon>
                        <ListItemText primary="Price" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <LocationOnIcon />
                        </ListItemIcon>
                        <ListItemText primary="Pick up in store" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <EventIcon />
                        </ListItemIcon>
                        <ListItemText primary="Events" />
                    </ListItem>
                </div>
            </nav> 
        )
    }
}
