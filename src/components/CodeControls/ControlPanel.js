import React from 'react'


import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import ToolTip from '@material-ui/core/Tooltip'
import PlayArrow from '@material-ui/icons/PlayArrow/'
import Pause from '@material-ui/icons/Pause'
import Refresh from '@material-ui/icons/Refresh'
import Previous from '@material-ui/icons/SkipPrevious'
import Next from '@material-ui/icons/SkipNext'
import { withStyles} from '@material-ui/core/styles'
import { Typography } from '@material-ui/core';

import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from '@material-ui/core/InputLabel';
import FormDialogue from './SortingGenerateArray';
import MenuItem from '@material-ui/core/MenuItem';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import Divider from '@material-ui/core/Divider'


const styles = theme => ({
    root: {
        flexGrow: 1,
    },

    paper: {
        flexGrow: 1,
        //marginLeft: 75,
        //marginRight: 75,
        //marginTop: 10,
        padding: theme.spacing.unit,
        width: 570,
    },

    contextLog: {
        padding: theme.spacing.unit,
    },
    button: {
        margin: theme.spacing.unit,
      },
})

class ControlPanel extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            run: false,
            open: false
        }
    }

    handleRunPause = () =>{
        this.setState(state => ({run: !this.state.run}));
        console.log(this.state.run);
    }

    handleScriptMenuToggle = () => {

    }

    handleArrayGeneration = () => {
        this.setState(state => ({open: !this.state.open}));
    }

    render(){
        const {classes, theme} = this.props;

        return(
            <div className={classes.root}>
                <Paper className={classes.paper} elevation={7}>
                    <IconButton color="secondary" >
                        <ToolTip title = "Previous">
                            <Previous/>
                        </ToolTip>
                    </IconButton>
                    
                    <IconButton color="secondary" onClick={this.handleRunPause}>
                        <ToolTip title = {(!this.state.run)? "Run": "Pause"}>
                            {(!this.state.run)? <PlayArrow/>: <Pause/>}
                        </ToolTip>
                    </IconButton>

                    <IconButton color="secondary">
                        <ToolTip title = "Next">
                            <Next/>
                        </ToolTip>
                    </IconButton>

                    <IconButton color="secondary" className={classes.button}>
                        <ToolTip title = "Reset">
                            <Refresh/>
                        </ToolTip>
                    </IconButton>

                    <Button onClick={this.handleScriptMenuToggle} variant="contained" color="primary" className={classes.button}>
                        <Typography color="secondary">
                            View Scripts
                        </Typography>
                    </Button>

                    <Button onClick={this.handleArrayGeneration} variant="contained" color="primary" className={classes.button}>
                        <Typography color="secondary">
                            Generate Array
                        </Typography>
                    </Button>

                    <Divider/>
                    <div className={classes.contextLog}>
                        <Typography color="secondary">
                            Number of Steps: <br/> 
                                        Log: 
                        </Typography> 
                    </div>

                    <Dialog
                        open={this.state.open}
                        onClose={this.handleArrayGeneration}
                    >
                        <DialogTitle>
                            Generate your Array
                        </DialogTitle>
                        
                        <DialogContent>
                            <DialogContentText>
                                You can set my maximum width and whether to adapt or not.
                            </DialogContentText>
            
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.handleArrayGeneration} color="secondary">
                                Confirm
                            </Button>
                        </DialogActions>
                    </Dialog>
                </Paper>
            </div>
        )
    }
}

export default withStyles(styles, {withTheme: true})(ControlPanel) 