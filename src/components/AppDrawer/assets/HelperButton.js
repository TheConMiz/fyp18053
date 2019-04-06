import React, { Fragment } from 'react';
import Help from '@material-ui/icons/Help';
import HelpOutline from '@material-ui/icons/HelpOutline';

import ToolTip from '@material-ui/core/Tooltip/Tooltip'
import IconButton from '@material-ui/core/IconButton/IconButton';
import {withStyles} from '@material-ui/core/styles'

import Button from '@material-ui/core/Button'

import Snackbar from '@material-ui/core/Snackbar';
import Typography from '@material-ui/core/Typography';


const styles = theme => ({
    helper: {
      margin: theme.spacing.unit,
    },

    button: {
      margin: theme.spacing.unit,
    },
  })

class HelperButton extends React.Component{

  constructor(props){
      super(props)
      this.state = {
        helper: false
      }
  }

  handleHelperToggle = () =>{
    this.setState(state => ({helper: !this.state.helper}))
  }
  


  render(){
      const {classes} = this.props;

      return(          
        <Fragment>
          <ToolTip title="Helper Mode" placement='bottom'>
            <IconButton color="secondary" className={classes.helper} onClick={this.handleHelperToggle}>
              {(!this.state.helper)? <Help/>: <HelpOutline/>}
            </IconButton>
          </ToolTip>

          <Snackbar 
            className={classes.helper}
            anchorOrigin={{vertical: 'top', horizontal: 'center'}}
            open={this.state.helper}
            autoHideDuration={5}
            message={
              <span >
                  {this.state.helper ? "Helper Mode has been enabled." : "Helper Mode has been disabled."}

                  {/* <Button onClick={this.handleHelperToggle} variant="outlined" color="secondary" className={classes.button}>
                    <Typography color="primary">
                      Click to Disable
                    </Typography>
                  </Button> */}
              </span>
            }>
          
          </Snackbar>
        </Fragment>
        
      )
  }
}

export default withStyles(styles, {withTheme: true})(HelperButton);