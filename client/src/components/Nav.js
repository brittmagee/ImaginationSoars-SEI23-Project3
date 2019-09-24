import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Landing from './Landing.js'
import Books from './Books.js'
import Genre from './Genre.js'

import HomeIcon from '@material-ui/icons/Home';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import ListIcon from '@material-ui/icons/List';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EventIcon from '@material-ui/icons/Event';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';


export default class Nav extends Component {
    render() {
        return (
            <nav >
                <div className="container">
                <Link to="/" component={Landing}>
                    <ListItem button>
                        <ListItemIcon>
                            <Link to="/" component={Landing}><HomeIcon /></Link>
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItem>
                </Link>
                <Link to="/books" component={Books}>
                    <ListItem button>
                        <ListItemIcon>
                            <Link to="/books" component={Books}><LibraryBooksIcon /></Link>
                        </ListItemIcon>
                        <ListItemText primary="Books" />
                    </ListItem>
                </Link>
                    <ListItem button>
                        <ListItemIcon>
                        <Link to="/" component={Genre}><ListIcon /></Link>
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
