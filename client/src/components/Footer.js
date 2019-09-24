import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import PinterestIcon from '@material-ui/icons/Pinterest';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import ChatIcon from '@material-ui/icons/Chat';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    boxShadow: 'none',
    textAlign: "center",
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  item: {
    padding: '0 90px 0 90px',
  },
  rightDiv:{
    paddingLeft: "15px"
  },
  social:{
    display: 'flex',
    justifyContent: 'space-between'
  },
  footer: {
    // backgroundColor: theme.palette.background.paper,
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    marginTop: theme.spacing.unit * 8,
    padding: `${theme.spacing.unit * 6}px 0`,
  },
  divider:{
      margin: '18px 0'
  }
});
 
function Footer(props) {
  const { classes } = props;
 
  return (
    <footer className={classes.footer}>
      <Paper className={classes.root} >
          <div className={classes.item}>
                <Typography component="h6">
                    Connect With Us
                    <div>
                        <Divider className={classes.divider}/>
                        <div className={classes.social}>
                            <InstagramIcon />
                            <FacebookIcon />
                            <TwitterIcon />
                            <PinterestIcon />
                        </div>
                    </div>
                </Typography>
          </div>
          <div className={classes.item}>
                <Typography variant="h5" component="h3">
                    Imagination Soars
                </Typography>   
                <Typography component="h3">
                    17 Cherry Tree Lane
                </Typography> 
                <Typography component="h3">
                    Atlanta, GA, USA
                </Typography> 
                <Typography component="h6">
                    North America, Planet Earth, Solar System,
                </Typography> 
                <Typography component="h6">
                    Orion Arm, Milky Way Galaxy
                </Typography>
                <Typography component="p">
                    <Divider className={classes.divider}/>
                    ©2019 Imagination Soars | All right reserved
                </Typography> 
          </div>
          <div className={classes.item, classes.rightDiv}>
                <Typography component="h6">
                    Contact Us
                    <div>
                        <Divider className={classes.divider}/>
                        <div className={classes.social}>
                            <PhoneIcon />
                            <EmailIcon />
                            <ChatIcon />
                        </div>
                    </div>
                </Typography>
          </div>
      </Paper>
    </footer>
  );
}
 
Footer.propTypes = {
    classes: PropTypes.object.isRequired,
};
 
export default withStyles(styles)(Footer);

