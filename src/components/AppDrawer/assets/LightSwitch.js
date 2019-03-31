import React from 'react';
import LightOn from '@material-ui/icons/WbSunny';
import LightOff from '@material-ui/icons/WbSunnyOutlined';
import ToolTip from '@material-ui/core/Tooltip/Tooltip'
import IconButton from '@material-ui/core/IconButton/IconButton';
import {withStyles} from '@material-ui/core/styles'

import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';


const styles = theme => ({
    lights: {
      margin: theme.spacing.unit,
    },
  })


class LightSwitch extends React.Component{
  
    constructor(props){
        super(props)
        this.state = {
          snackbar: false
        }
    }

    handleSnackBar = () => {
      
    }

    render(){
        const {classes} = this.props
        return(

            <ToolTip title="Toggle Lights" placement='bottom'>
            <IconButton color="secondary" className={classes.lights} onClick={this.props.handleLightChange} aria-label="Toggle Lights">
              {(!this.props.light)? <LightOn/>: <LightOff/>}
            </IconButton>
          </ToolTip>
        )
    }
}

export default withStyles(styles, {withTheme: true})(LightSwitch);