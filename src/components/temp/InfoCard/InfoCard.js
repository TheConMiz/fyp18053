import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'

import Divider from '@material-ui/core/Divider'

const styles = theme => ({
  card: {
    //marginTop: 10,
    flexGrow: 1,
    width: 570, 
    height: 136,
    padding: theme.spacing.unit,
  },
});

class InfoCard extends React.Component {
  constructor(props){
    super(props)
    this.state={
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card} elevation={7}>
        <Typography gutterBottom variant="h5" component="h2">
          Help Widget
        </Typography>
        <Divider/>
        <Typography component="p">
          This widget provides context-based tips
        </Typography>
      </Card>
    );
  }
}

InfoCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InfoCard);