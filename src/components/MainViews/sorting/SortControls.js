import React from 'react'
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import IconButton from '@material-ui/core/IconButton'
import ToolTip from '@material-ui/core/Tooltip'
import PlayArrow from '@material-ui/icons/PlayArrow/'
import Pause from '@material-ui/icons/Pause'
import Refresh from '@material-ui/icons/Refresh'
import Previous from '@material-ui/icons/SkipPrevious'
import Next from '@material-ui/icons/SkipNext'

import Button from '@material-ui/core/Button'
import { Typography } from '@material-ui/core';

const styles = theme => ({
    simView: {
        width : 570,
        padding: theme.spacing.unit,
        flexGrow: 1
    },

    controlPaper: {
        width : 570,
        flexGrow: 1,
        padding: theme.spacing.unit * 2,
    },

    button: {
        margin: theme.spacing.unit,
    },
})

class SortControls extends React.Component{

    render(){
        const {classes} = this.props
        return(
            <Paper 
                className={classes.controlPaper}
                elevation={7}>

                <IconButton color="secondary">
                    <ToolTip title = "Previous">
                        <Previous/>
                    </ToolTip>
                </IconButton>

                <IconButton
                    color="secondary"
                    onClick={this.props.handlePlayPause}>

                    <ToolTip title={!this.props.play ? "Play": "Pause"}>
                       { !this.props.play ? <PlayArrow/> :  <Pause/>}

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

                <Button
                    color="primary"
                    variant="contained"
                    className={classes.button}
                    onClick={this.props.randomiseBarChart}>
                        <Typography color="secondary">
                            Randomise
                        </Typography>
                </Button>

                <Button
                    className={classes.button}
                    color="primary"
                    variant="contained"
                    onClick={this.props.shuffleBarChart}>

                        <Typography color="secondary">
                            Shuffle
                        </Typography>
                </Button>

                <Button
                    className={classes.button}>
                    Bogo Sort
                </Button>
            </Paper>


        )
    }

}

export default withStyles(styles, {withTheme: true})(SortControls)