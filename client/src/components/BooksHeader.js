import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav.js'
import BooksDisplay from './BooksDisplay.js'
import BookForm from './BookForm.js'

import Cart from './Cart.js'


import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
// import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
// import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


// aligns the header with the sidenav divider
const sideNav= 200;

const CSS = makeStyles(style => ({
  root: {
      //ensure app is repsonsive
    display: 'flex',
  },
  toolbar: {
    paddingRight: 30, // keep right padding when sideNav closes
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 12px',
    ...style.mixins.toolbar,
  },
  appBar: {
    zIndex: style.zIndex.drawer + 1,
    transition: style.transitions.create(['width', 'margin'], {
      easing: style.transitions.easing.sharp,
      duration: style.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: sideNav,
    width: `calc(100% - ${sideNav}px)`,
    transition: style.transitions.create(['width', 'margin'], {
      easing: style.transitions.easing.sharp,
      duration: style.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 30,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
    padding: 15 //adds padding to header title
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: sideNav,
    transition: style.transitions.create('width', {
      easing: style.transitions.easing.sharp,
      duration: style.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: style.transitions.create('width', {
      easing: style.transitions.easing.sharp,
      duration: style.transitions.duration.leavingScreen,
    }),
    width: style.spacing(7),
    [style.breakpoints.up('sm')]: {
      width: style.spacing(9),
    },
  },
  appBarSpacer: style.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: style.spacing(4),
    paddingBottom: style.spacing(4),
  },
  paper: {
    padding: style.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
  nav: {
    marginTop: '20px'
  }
}));

export default function Header(props) {
    const styling = CSS();
    const [open, setOpen] = React.useState(true);
    const handleDrawerOpen = () => {
      setOpen(true);
    };
    const handleDrawerClose = () => {
      setOpen(false);
    };
  
    return (
        <div>
        <div>Logo</div>
        <div>Imagination Soars</div>
        <div>Shopping Cart Icon</div>
        <AppBar position="absolute" className={clsx(styling.appBar, open && styling.appBarShift)}>
            <Toolbar className={styling.toolbar}>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    className={clsx(styling.menuButton, open && styling.menuButtonHidden)}>
                    <MenuIcon />
                </IconButton>
                <Typography component="h1" variant="h3" color="inherit" noWrap className={styling.title}>
                    Imagination Soars
                </Typography>
                <Cart />
            </Toolbar>
        </AppBar>

        <Drawer 
            variant="permanent"
            styling={{
            paper: clsx(styling.drawerPaper, !open && styling.drawerPaperClose),
            }}
            open={open}>
            <div className={styling.toolbarIcon}>
            <IconButton onClick={handleDrawerClose}>
                <ChevronLeftIcon />
            </IconButton>
            </div>
            <div className={styling.nav}>
              <Nav />
            </div>
      </Drawer>
      <main className={styling.content}>
        <div className={styling.appBarSpacer} />
        {/* <BookForm /> */}
        <Container maxWidth="lg" className={styling.container}>
            {BooksDisplay(props.books)}
        </Container>
      </main>
    </div>
    );
  }