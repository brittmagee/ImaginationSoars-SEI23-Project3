import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Typography from '@material-ui/core/Typography';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PaymentIcon from '@material-ui/icons/Payment';
import Fab from '@material-ui/core/Fab';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ReceiptIcon from '@material-ui/icons/Receipt';

import ShoppingCart from './ShoppingCart.js'

const useStyles = makeStyles({
  body: {
    textAlign: 'center',
    padding: '20px',
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  },
  list: {
    width: 500,
  },
  fullList: {
    width: 'auto',
  },
  item: {
    padding: '30px'
  },
  pay: {
    display: 'flex',
    flexDirection: 'column',
    padding: ' 10px 110px'
  },
  margin: {
    margin: "10px 0"
  }
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      // onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <div className={classes.body}>
        <Typography variant="h5" component="h2">Imagination Soars</Typography>
        <Typography variant="body1" color="textSecondary" lineHeight={10}>Order Summary</Typography>
      </div>
      <Divider />
      <div className={classes.item}>  
        <ShoppingCart/>
      </div>
      <Divider />
      <List className={classes.pay}>
        <Fab variant="extended" color="secondary" aria-label="add" className={classes.margin}>
          <ArrowBackIosIcon className={classes.extendedIcon} />
           Back to Browse
        </Fab>
        <Fab variant="extended" color="primary" aria-label="add" className={classes.margin}>
          <PaymentIcon className={classes.extendedIcon} />
           PayPal Checkout
        </Fab>
        <Fab variant="extended" color="tertiary" aria-label="add" className={classes.margin}>
          <ReceiptIcon className={classes.extendedIcon} />
          Checkout
        </Fab>
      </List>
    </div>
  );


  return (
    <div>
      <IconButton color="inherit" onClick={toggleDrawer('right', true)}>
        <Badge badgeContent={1} color="secondary">
          <ShoppingCartIcon/>
        </Badge>
      </IconButton>
      <Drawer anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
        {sideList('right') }
      </Drawer>
    </div>
  );
}