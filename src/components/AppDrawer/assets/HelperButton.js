import React from 'react';
import Help from '@material-ui/icons/Help';
import HelpOutline from '@material-ui/icons/HelpOutline';

import ToolTip from '@material-ui/core/Tooltip/Tooltip'
import IconButton from '@material-ui/core/IconButton/IconButton';
import {withStyles} from '@material-ui/core/styles'

import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';

const styles = theme => ({
    helper: {
      margin: theme.spacing.unit,
    },
    toast: {
      backgroundColor: "primary"
    }
  })

class HelperButton extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }
    

    render(){
        const {classes} = this.props;

        return(          

          <ToolTip title="Helper Mode" placement='bottom'>
            <IconButton color="secondary" className={classes.helper} onClick={this.props.handleHelperChange}>
              {(!this.props.helper)? <Help/>: <HelpOutline/>}
            </IconButton>
          </ToolTip>
        )
    }
}

export default withStyles(styles, {withTheme: true})(HelperButton);