import React from 'react'


import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import ToolTip from '@material-ui/core/Tooltip'
import PlayArrow from '@material-ui/icons/PlayArrow/'
import Pause from '@material-ui/icons/Pause'
import Refresh from '@material-ui/icons/Refresh'
import ScriptMenu from './ScriptMenu'
import { withStyles, createMuiTheme } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        flexGrow: 1,
        marginLeft: 75,
        marginTop: 10,
        padding: theme.spacing.unit,
        width: 570,
    }
})

class ControlPanel extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            run: false,
        }
    }

    handleRunPause = () =>{
        this.setState(state => ({run: !this.state.run}))
        console.log(this.state.run)
    }

    handleScriptMenuToggle = () => {

    }

    render(){
        const {classes, theme} = this.props
        return(
            <div className={classes.root}>
                <Paper className={classes.paper} elevation={10}>
                    <IconButton color="secondary" onClick={this.handleRunPause}>
                        <ToolTip title = {(!this.state.run)? "Pause": "Run"}>
                            {(!this.state.run)? <Pause/>: <PlayArrow/>}
                        </ToolTip>
                    </IconButton>
                    <IconButton color="secondary">
                        <ToolTip title = "Reset">
                            <Refresh/>
                        </ToolTip>
                    </IconButton>
                    <Button>
                        <Typography color="secondary" onClick={this.handleScriptMenuToggle}>
                            View Scripts
                        </Typography>
                    </Button>
                </Paper>
            </div>
        )
    }
}

export default withStyles(styles, {withTheme: true})(ControlPanel) 