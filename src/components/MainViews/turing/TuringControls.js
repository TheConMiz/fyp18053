import React, { Fragment } from 'react'

// Material UI components
import {withStyles} from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import IconButton from '@material-ui/core/IconButton'
import ToolTip from '@material-ui/core/Tooltip'
import PlayArrow from '@material-ui/icons/PlayArrow/'
import Refresh from '@material-ui/icons/Refresh'
import Button from '@material-ui/core/Button'
import { Typography} from '@material-ui/core'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import Dialog from '@material-ui/core/Dialog'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import Input from '@material-ui/core/Input'
import MenuItem from '@material-ui/core/MenuItem'

// Material UI styling assets
const styles = theme => ({
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
    },
    statePaper: {
        width: 570,
        padding: theme.spacing.unit * 2
    },

    formControl: {
        margin: theme.spacing.unit,
        flexGrow: 1
    },
})

class TuringControls extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            scriptMenu: false,
            stateMenu: false,
            instructionsMenu: false,
        }
    }

    // Menu toggles
    scriptMenuOpen = () => {
        this.setState({scriptMenu: !this.state.scriptMenu})
    }
    stateMenuOpen = () => {
        this.setState({stateMenu: !this.state.stateMenu})
    }
    instructionsMenuOpen = () => {
        this.setState({instructionsMenu: !this.state.instructionsMenu})
    }

    render(){
        const {classes} = this.props
        return(
            <Paper 
                className={classes.controlPaper}
                elevation={7}>
                {/* Button for running one iteration of the Turing Machine*/}
                <IconButton
                    color="secondary"
                    onClick={() => {
                        this.props.startMachine()
                    }}
                    disabled={this.props.play}>
                    <ToolTip title = "Start">
                        <PlayArrow/>
                    </ToolTip>
                </IconButton>

                {/* Button for resetting the Turing Machine, in case of errors*/}
                <IconButton
                    color="secondary"
                    onClick={()=> {
                        this.props.setPlay(false)
                        this.props.setError(false)
                        this.props.currentScript === "Endless 1/0s" ? this.props.endless10Setter():
                        this.props.currentScript === "Increment by 1" ? this.props.incrementOneSetter():
                        this.props.currentScript === "Ping-Pong" ? this.props.genericSetter(): console.log("Nothing to set")
                    }}>
                    <ToolTip title = "Reset">
                        <Refresh/>
                    </ToolTip>
                </IconButton>
                {/* Button for selecting script*/}
                <Button
                    className={classes.button}
                    color="primary"
                    variant="contained"
                    onClick={this.scriptMenuOpen}>

                    <Typography color="secondary">
                        Scripts
                    </Typography>
                </Button>

                {/* Button for selecting and changing states*/}
                <Button
                    className={classes.button}
                    color="primary"
                    variant="contained"
                    onClick={this.stateMenuOpen}>

                    <Typography color="secondary">
                        Machine States
                    </Typography>
                </Button>

                {/* Button for changing instructions*/}
                <Button
                    className={classes.button}
                    color="primary"
                    variant="contained"
                    onClick={this.instructionsMenuOpen}>

                    <Typography color="secondary">
                        Instructions
                    </Typography>
                </Button>

                {/* Forms for performing data operations on the machine*/}
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
                                    {this.props.scriptList.map((text, index) => (
                                        <FormControlLabel value={text} key={index} control={<Radio color="secondary"/>} label={text}/>
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

                <Dialog
                    open={this.state.stateMenu}
                    className={classes.dialog}
                    scroll="body">

                    <FormControl
                        component="fieldset" 
                        className={classes.formControl}>
                            <Typography
                                className={classes.typography} 
                                variant="h6"
                                color="secondary"
                                align="center">
                                    States
                            </Typography>

                            <Divider/>

                            {this.props.stateList.map((text, index) => (
                                <ListItem  key={text}>
                                    <ListItemText primary={text}/>
                                </ListItem>
                            ))}

                        </FormControl>

                    <Button
                        className={classes.button}
                        variant="contained"
                        color="primary"
                        onClick={this.props.addStates}>
                        <Typography
                            color="secondary">
                                Add State
                            </Typography>
                    </Button>

                    <Button
                        className={classes.button}
                        variant="contained"
                        color="primary"
                        disabled={this.props.stateList.length===1}
                        onClick={this.props.removeStates}>
                        <Typography
                            color="secondary">
                                Remove State
                            </Typography>
                    </Button>

                    <Button
                        className={classes.button}
                        onClick={this.stateMenuOpen}
                        variant="contained"
                        color="primary">
                        <Typography
                            color="secondary">
                                Confirm
                            </Typography>
                    </Button>
                </Dialog>

                <Dialog
                    open={this.state.instructionsMenu}
                    className={classes.dialog}
                    scroll="body">

                    <FormControl
                        component="fieldset" 
                        className={classes.formControl}>
                            <Typography
                                className={classes.typography} 
                                variant="h6"
                                color="secondary"
                                align="center">
                                    Instructions
                            </Typography>

                            <Divider/>

                            {this.props.instructions.map((object, id) => (
                                <Fragment  key={id}>
                                    <Typography
                                        className={classes.typography} 
                                        variant="h6"
                                        color="secondary"
                                        align="center">
                                            Instruction {id}
                                    </Typography>
                                    
                                    <FormControl
                                      
                                        className={classes.formControl}>
                                        <InputLabel shrink>
                                            State
                                        </InputLabel>

                                        <Select
                                            value={object.state}
                                            onChange={(event) => {
                                                object.state = event.target.value
                                                this.props.setInstruction(object, id)}}
                                            input={<Input name="state" id="state" />}
                                            >

                                        {this.props.stateList.map((text, id) => (
                                            <MenuItem key={id} value={text}>
                                                {text}
                                            </MenuItem>
                                        ))}

                                        </Select>
                                    </FormControl>

                                    <FormControl className={classes.formControl} >
                                        <InputLabel shrink>
                                            If Read
                                        </InputLabel>
                                            
                                        <Select
                                            value={object.ifRead}
                                            onChange={(event) => {
                                                object.ifRead = event.target.value
                                                this.props.setInstruction(object, id)}}
                                            input={<Input name="ifRead" id="ifRead" />}
                                            >

                                            {this.props.dataList.map((text, id) => (
                                                <MenuItem key={id} value={text}>
                                                    {text}
                                                </MenuItem>
                                            ))}

                                        </Select>
                                    </FormControl>

                                    <FormControl className={classes.formControl}>
                                        <InputLabel shrink>
                                            Write
                                        </InputLabel>
                                        
                                        <Select
                                            value={object.write}
                                            onChange={(event) => {
                                                object.write = event.target.value
                                                this.props.setInstruction(object, id)}}
                                            input={<Input name="write" id="write" />}
                                            >

                                            {this.props.dataList.map((text, id) => (
                                                <MenuItem key={id} value={text}>
                                                    {text}
                                                </MenuItem>
                                            ))}

                                        </Select>
                                    </FormControl>

                                    <FormControl className={classes.formControl}>
                                        <InputLabel shrink>
                                            Next State
                                        </InputLabel>
                                        
                                        <Select
                                            value={object.goTo}
                                            onChange={(event) => {
                                                object.goTo = event.target.value
                                                this.props.setInstruction(object, id)}}
                                            input={<Input name="nextState" id="nextState" />}
                                            >

                                            {this.props.stateList.map((text, id) => (
                                                <MenuItem key={id} value={text}>
                                                    {text}
                                                </MenuItem>
                                            ))}

                                        </Select>
                                    </FormControl>

                                    <FormControl
                                        className={classes.formControl}
                                        >
                                        <InputLabel shrink>
                                            Tape Move
                                        </InputLabel>
                                        
                                        <Select
                                            value={object.moveTape}
                                            onChange={(event) => {
                                                object.moveTape = event.target.value
                                                this.props.setInstruction(object, id)}}
                                            input={<Input name="tapeMove" id="tapeMove" />}
                                            >

                                            {this.props.moveList.map((text, id) => (
                                                <MenuItem key={id} value={text}>
                                                    {text}
                                                </MenuItem>
                                            ))}

                                        </Select>
                                    </FormControl>  
                                </Fragment>
                            ))}

                        </FormControl>

                    <Button
                        className={classes.button}
                        variant="contained"
                        color="primary"
                        onClick={this.props.addInstruction}>
                        <Typography
                            color="secondary">
                                Add Instruction
                            </Typography>
                    </Button>

                    <Button
                        className={classes.button}
                        variant="contained"
                        color="primary"
                        disabled={this.props.instructions.length===1}
                        onClick={this.props.removeInstruction}>
                        <Typography
                            color="secondary">
                                Remove Instruction
                            </Typography>
                    </Button>

                    <Button
                        className={classes.button}
                        onClick={this.instructionsMenuOpen}
                        variant="contained"
                        color="primary">
                        <Typography
                            color="secondary">
                                Confirm
                            </Typography>
                    </Button>
                </Dialog>

                {/* Code ofr handling error messages*/}
                {this.props.error ? 
                    <Typography 
                        className={classes.typography} 
                        color="secondary" 
                        variant="h7">
                            Possible Error: Check the instructions, and click Reset
                        </Typography>: ""}
                
            </Paper>
        )
    }

}

export default withStyles(styles, {withTheme: true})(TuringControls)