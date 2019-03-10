import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';

import LeftArrow from '@material-ui/icons/KeyboardArrowLeft'
import RightArrow from '@material-ui/icons/KeyboardArrowRight'
import Divider from '@material-ui/core/Divider'
import MoreVertIcon from '@material-ui/icons/MoreVert';


const styles = theme => ({
  card: {
    marginLeft: 50,
    marginTop: 78.5,
    width: 520,
    flexGrow: 1,
  },
});

class InfoCard extends React.Component {
  constructor(props){
    super(props)
    this.state={
      currentTopic: 'Turing',
      currentInfoId: 0,
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardHeader
          action={
            <IconButton>
              <MoreVertIcon color="secondary"/>
            </IconButton>
          }
          title="Placeholder Title"
          subheader="Placeholder Text"
        />
        <Divider/>
        <CardContent>
          <Typography component="p">

          </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="Previous">
            <LeftArrow color="secondary"/>
          </IconButton>
          <IconButton aria-label="Next">
            <RightArrow color="secondary"/>
          </IconButton>
        </CardActions>
      </Card>
    );
  }
}

InfoCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InfoCard);