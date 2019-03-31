import React from 'react'

import Paper from '@material-ui/core/Paper'
import IconButton from '@material-ui/core/IconButton'
import ToolTip from '@material-ui/core/Tooltip'
import PlayArrow from '@material-ui/icons/PlayArrow/'
import Pause from '@material-ui/icons/Pause'
import Refresh from '@material-ui/icons/Refresh'
import Previous from '@material-ui/icons/SkipPrevious'
import Next from '@material-ui/icons/SkipNext'
import { withStyles} from '@material-ui/core/styles'

import ArrayGenerationMenu from './ArrayGenerationMenu'
import ScriptsViewMenu from './ScriptsViewMenu'


const styles = theme => ({
    root: {
        flexGrow: 1,
    },

    paper: {
        flexGrow: 1,
        padding: theme.spacing.unit,
        width: 570,
    },

    contextLog: {
        padding: theme.spacing.unit,
    },

    button: {
        margin: theme.spacing.unit,
    },

    textField: {
        margin: theme.spacing.unit,
        width: 135,
        flexGrow: 1
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
        const {classes} = this.props;

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

                    <ScriptsViewMenu/>

                    <ArrayGenerationMenu/>

                </Paper>
            </div>
        )
    }
}

export default withStyles(styles, {withTheme: true})(ControlPanel) 