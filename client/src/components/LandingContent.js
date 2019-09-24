import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    margin: '5px'
  },
  media: {
    height: 140,
  },
  content: {
      display: 'flex',
  }
});

export default function MediaCard() {
  const styling = useStyles();

  return (
<div className={styling.content}>
    <Card className={styling.card}>
      <CardActionArea>
        <CardMedia
          className={styling.media}
          image="https://s.abcnews.com/images/GMA/demi-moore-abc-ml-190923_hpMain_16x9_1600.jpg"
          title="Book Signing: Demi Moore"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Book Signing: Demi Moore
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Tuesday October 1st, 2019 7:00 PM Join us in welcoming famed American actress Demi Moore as she discusses Inside Out, 
          her surprisingly intimate and emotionally charged memoir. Tickets are required for event entry. 1 ticket = admission 
          for 1 to the discussion and 1 copy of Inside Out for Demi Moore to personalize.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          October 1st
        </Button>
        <Button size="small" color="primary">
          More about this event...
        </Button>
      </CardActions>
    </Card>

    <Card className={styling.card}>
      <CardActionArea>
        <CardMedia
          className={styling.media}
          image="https://blackkidscantread.files.wordpress.com/2012/02/blackfamilyreading.jpg"
          title="National Family Literacy Day"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            National Family Literacy Day
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          National Family Literacy Day®, celebrated across the U.S., focuses on special activities and 
          events that showcase the importance of family literacy programs. First held in 1994, the annual 
          event is officially celebrated on November 1st, but many events are held throughout the month of November. 
          Schools, libraries, and other literacy organizations participate through read-a-thons, celebrity appearances, 
          book drives, and more!
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          November 1st
        </Button>
        <Button size="small" color="primary">
          Join Us!
        </Button>
      </CardActions>
    </Card>

    <Card className={styling.card}>
      <CardActionArea>
        <CardMedia
          className={styling.media}
          image="https://visitedmondok.com/userfiles/image/photos_2383.jpg"
          title="Author Event: Brittney Morris"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Author Event: Brittney Morris
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Saturday December 15, 2019 1:00 PM Meet debut YA author BRITTNEY MORRIS as she is in conversation with 
          JUSTIN A. REYNOLDS! This event will be a discussion followed by a signing. Morris' powerful young adult 
          novel SLAY follows a fierce teen game developer as she battles a real life-troll intent on ruining the 
          Black Panther inspired video game she created and the safe community it represents for Black gamers.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          December 15th
        </Button>
        <Button size="small" color="primary">
          Wristband required!
        </Button>
      </CardActions>
    </Card>
</div>
  );
}