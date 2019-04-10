
import React from 'react';
import Paper from '@material-ui/core/Paper';
import {withStyles} from '@material-ui/core/styles';

import Divider from '@material-ui/core/Divider'

import IconButton from '@material-ui/core/IconButton'
import ToolTip from '@material-ui/core/Tooltip'
import PlayArrow from '@material-ui/icons/PlayArrow/'
import Pause from '@material-ui/icons/Pause'
import Refresh from '@material-ui/icons/Refresh'
import Previous from '@material-ui/icons/SkipPrevious'
import Next from '@material-ui/icons/SkipNext'

import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import Grid from '@material-ui/core/Grid'

import Example from './Example'

import * as d3 from 'd3'


import SortD3 from './sorting/SortD3'

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

    divider: {
        margin: theme.spacing.unit * 2
    },

    svgPaper: {
        height: 500,
        width: 570,
    }
})

class SimView extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            svgWidth      : 550,
            svgHeight     : 480,
            data       : d3.range(30).map(Math.random),  
            play: false,
        }
    }

    handlePlayPause = () => {
        this.setState({play: !this.state.play})
    }

    render(){
        const {classes} = this.props      
        return(
            <Grid
                container
                direction="column"
                justify="space-evenly"
                alignItems="center"
                spacing={24}>
                <Grid item>
                    <Paper
                        className={classes.svgPaper}
                        elevation={7}>
                            <svg
                                width  = {this.state.svgWidth}
                                height = {this.state.svgHeight}>

                                <SortD3
                                    data={this.state.data}
                                    height={this.state.svgHeight}
                                    width={this.state.svgWidth}/>

                            </svg>       
                            <Divider/>
                    </Paper>
         
                </Grid>

                <Example/>

                <Grid item>
                    <Paper
                        className={classes.controlPaper}
                        elevation={7}>

                        <IconButton color="secondary" >
                            <ToolTip title = "Previous">
                                <Previous/>
                            </ToolTip>
                        </IconButton>

                        <IconButton color="secondary" onClick={this.handlePlayPause}>
                            <ToolTip title = {(!this.state.play)? "Run": "Pause"}>
                                {(!this.state.play)? <PlayArrow/>: <Pause/>}
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
                            variant = "contained" 
                            color = "primary" 
                            className = {classes.button}>

                            <Typography color="secondary">
                                Shuffle
                            </Typography>
                        </Button>
                        <Button
                            variant = "contained" 
                            color = "primary"
                            className = {classes.button}>

                            <Typography color="secondary">
                                Special Cases
                            </Typography>
                        </Button>
                    </Paper>                
                </Grid>

                <Grid item>
                    <Paper
                        className={classes.controlPaper}
                        elevation={7}>
                    </Paper>
                </Grid>

                <Grid item>
                    <Paper
                        className={classes.controlPaper}
                        elevation={7}>

                        <Typography variant="h5">
                            Testing
                        </Typography>

                        <Typography>
                            THIS IS SOME TEXT
                        </Typography>

                    </Paper>
                </Grid>


            </Grid>
        )
    }
}

export default withStyles(styles, {withTheme: true})(SimView)