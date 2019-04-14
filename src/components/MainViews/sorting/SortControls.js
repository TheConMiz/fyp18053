import React from 'react'

// Material UI components
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton'
import ToolTip from '@material-ui/core/Tooltip'
import PlayArrow from '@material-ui/icons/PlayArrow/'
import Stop from '@material-ui/icons/Stop'
import Refresh from '@material-ui/icons/Refresh'
import Button from '@material-ui/core/Button'
import { Typography} from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider'

// Material UI styling
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

    typography: {
        padding: theme.spacing.unit
    },

    dialog: {
        flexGrow: 1,
        padding: theme.spacing.unit * 2
    },

    radio: {
        padding: theme.spacing.unit * 2
    },

    textField: {
        margin: theme.spacing.unit,
        width: 100
    }
})

class SortControls extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            scriptMenu: false,
            selection: ""
        }
    }

    // Handles toggle of script menu
    scriptMenuOpen = () => {
        this.setState({scriptMenu: !this.state.scriptMenu})
    }

    render(){
        const {classes} = this.props
        return(
            <Paper 
                className={classes.controlPaper}
                elevation={7}>

                {/*Button for Playing simulations*/}
                <IconButton
                    color="secondary"
                    onClick={() => {
                        this.props.currentScript === "Bubble" ? this.props.bubbleSort(): 
                        this.props.currentScript === "Insertion" ? this.props.insertionSort(): 
                        this.props.currentScript === "Selection" ? this.props.selectionSort():
                        this.props.currentScript === "Quick" ? this.props.quickSort():
                        console.log("No script selected")
                        
                        this.props.setPlay()
                    }}

                    disabled={this.props.play}>

                    <ToolTip title = "Start">
                        <PlayArrow/>
                    </ToolTip>
                </IconButton>

                {/*Button for stopping simulations*/}
                <IconButton
                    color="secondary"
                    disabled={!this.props.play}
                    onClick={ () => {
                        this.props.stopLoop()
                        this.props.setPlay()
                    }}>
                    <ToolTip title = "Stop">
                        <Stop/>
                    </ToolTip>
                </IconButton>
                
                {/*Button for resetting simulations*/}
                <IconButton
                    color="secondary" 
                    className={classes.button}
                    disabled={this.props.play}
                    onClick={this.props.shuffleBarChart}>
                    <ToolTip title = "Reset">
                        <Refresh/>
                    </ToolTip>
                </IconButton>

                {/*Button for selecting simulations*/}
                <Button
                    className={classes.button}
                    color="primary"
                    variant="contained"
                    onClick={this.scriptMenuOpen}
                    disabled={this.props.play}>

                    <Typography color="secondary">
                        Scripts
                    </Typography>

                </Button>

                {/*Dialog pop-up for selecting simulation simulations*/}
                <Dialog
                    open={this.state.scriptMenu}
                    className={classes.dialog}>

                    <FormControl
                        component="fieldset" 
                        className={classes.formControl}>
                            <Typography
                                className={classes.typography} 
                                variant="h6"
                                color="secondary"
                                align="center">
                                    Select Script
                            </Typography>

                            <Divider/>
                            
                            <RadioGroup
                                name="scriptsMenu"
                                className={classes.radio}
                                value={this.props.currentScript}
                                onChange={(event) => this.props.setScript(event.target.value)}>
                                    {this.props.scripts.map((text, index) => (
                                        <FormControlLabel value={text} key={index} control={<Radio color="secondary"/>} label={text + " Sort"}/>
                                    ))}
                            </RadioGroup>
                        </FormControl>
                        <Button
                            className={classes.button}
                            onClick={this.scriptMenuOpen}
                            variant="contained"
                            color="primary">
                            <Typography
                                color="secondary">
                                    Confirm
                                </Typography>
                        </Button>
                </Dialog>

                {/*Text field for setting simulation speed*/}
                <TextField
                    id="speed"
                    label="Set Interval"
                    type="number"
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    value={this.props.speed}
                    margin="normal"
                    variant="outlined"
                    onChange={(event) => this.props.setSpeed(event.target.value)}
                    disabled={this.props.play}
                    helperText="The smaller, the quicker!">
                </TextField>

                 {/*Text field for setting simulation speed*/}
                <TextField
                    id="dataSize"
                    label="Set Data Size"
                    type="number"
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    value={this.props.dataSize}
                    margin="normal"
                    variant="outlined"
                    disabled={this.props.play}
                    onChange={(event) => this.props.setDataSize(event.target.value)}
                    helperText="Reset after changing value!">
                </TextField>
            </Paper>
        )
    }
}

export default withStyles(styles, {withTheme: true})(SortControls)