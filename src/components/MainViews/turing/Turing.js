// Credits to http://turingmachine.io/
// Credits to http://morphett.info/turing/
// Credits tohttp://math.hws.edu/eck/js/turing-machine/TM.html

import React from 'react'

// Material UI components
import Paper from '@material-ui/core/Paper'
import {withStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import TuringControls from './TuringControls'
import Typography from '@material-ui/core/Typography'

// Self-generated components
import CodeView from './CodeView'
import TuringTape from './TuringTape'
import ErrorBoundary from './ErrorBoundary'

const styles = theme => ({
    controlPaper: {
        width : 570,
        flexGrow: 1,
        padding: theme.spacing.unit * 2,
    },

    button: {
        margin: theme.spacing.unit,
    },
})

class Turing extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            // States for storing scripts, machine state, dataset, etc.
            scriptList: ["Endless 1/0s", "Increment by 1", "Ping-Pong"],
            currentScript: "Endless 1/0s",

            moveList: ["right", "left", "halt"],

            instructions: [],

            dataList: ["0", "1", "blank"],

            stateList: ["q0", "q1"],
            startState: "q0",
            
            currentState: "q0",

            tapeArray: ["1","0","0","0","0","0","0","0","0","1"],
            tapePosition: 4,
            play: false,
            editor: false,
            error: false,

        }
        this.startMachine = this.startMachine.bind(this)
    }

    // Loads the endless1/0 script as the default on page load
    componentDidMount(){
        this.endless10Setter()
    }

    // Add states to the machine
    addStates = () => {
        let tempStates = this.state.stateList.slice()
        tempStates.push("q" + tempStates.length)
        this.setState({stateList: tempStates})
        //console.log(this.state.stateList)
    }

    // Remove states from the machine. There will always be a minimum of 1 state
    removeStates = () => {
        let tempStates = this.state.stateList.slice()
        tempStates.pop()
        this.setState({stateList: tempStates})
        //console.log(this.state.stateList)
    }

    // Setter for scripts
    setScript = (newScript) => {
        newScript === "Endless 1/0s" ? this.endless10Setter():
        newScript === "Increment by 1" ? this.incrementOneSetter():
        newScript === "Ping-Pong" ? this.genericSetter(): console.log("Nothing to set")
        this.setState({currentScript: newScript})
    }

    // Add instructions to the machine
    addInstruction = () => {
        let tempInstructions = this.state.instructions.slice()
        let newInstruction={
            "state": "q0",
            "ifRead": "blank",
            "write": "0",
            "goTo": "q0",
            "moveTape": "right"
        }
        
        tempInstructions.push(newInstruction)   
        this.setState({instructions: tempInstructions})
    }

    // Remove instructions from the machine
    removeInstruction = () => {
        let tempInstructions = this.state.instructions.slice()
        tempInstructions.pop()
        //console.log(tempInstructions)
        this.setState({instructions: tempInstructions})
    }

    // Setter for instructions
    setInstruction = (newObject, id) => {
        let tempInstructions = this.state.instructions.slice()
        tempInstructions[id] = newObject
        this.setState({instructions: tempInstructions})

    }

    // Modify Tape cells based on their values
    changeCell = (cellId) => {
        //console.log(cellId)
        let tempTape = this.state.tapeArray.slice()
        
        tempTape[cellId] === "0" ? tempTape[cellId] = "1" : 
        tempTape[cellId] === "1" ? tempTape[cellId] = "blank" :
        tempTape[cellId] = "0"

        this.setState({tapeArray: tempTape})
    }

    // Some utility setters
    setPlay = (value) => {
        this.setState({play: value})
    }
    setError = (value) => {
        this.setState({error: value})
    }

    // Scripts containing instructions, states, etc.
    endless10Setter = () => {
        this.setState({stateList: ["q0", "q1", "q2", "q3"]})
        this.setState({instructions: [
            {
                "state": "q0",
                "ifRead": "blank",
                "write": "0",
                "goTo": "q1",
                "moveTape": "right"
            },
            {
                "state": "q1",
                "ifRead": "blank",
                "write": "blank",
                "goTo": "q2",
                "moveTape": "right"
            },
            {
                "state": "q2",
                "ifRead": "blank",
                "write": "1",
                "goTo": "q3",
                "moveTape": "right"
            },
            {
                "state": "q3",
                "ifRead": "blank",
                "write": "blank",
                "goTo": "q0",
                "moveTape": "right"
            },
        ]})     
        this.setState({tapeArray: ["blank","blank","blank","blank","blank","blank","blank","blank","blank","blank"]})

        this.setState({startState: "q0"})
        this.setState({currentState: "q0"})
        this.setState({tapePosition: 0})
        this.setState({play: false})

    }

    incrementOneSetter = () => {
        this.setState({stateList: ["q0", "q1", "q2"]})
        this.setState({instructions: [
            {
                "state": "q0",
                "ifRead": "1",
                "write": "1",
                "goTo": "q0",
                "moveTape": "right"
            },
            {
                "state": "q0",
                "ifRead": "0",
                "write": "0",
                "goTo": "q0",
                "moveTape": "right"
            },
            {
                "state": "q0",
                "ifRead": "blank",
                "write": "blank",
                "goTo": "q1",
                "moveTape": "left"
            },
            {
                "state": "q1",
                "ifRead": "1",
                "write": "0",
                "goTo": "q1",
                "moveTape": "left"
            },
            {
                "state": "q1",
                "ifRead": "0",
                "write": "1",
                "goTo": "q2",
                "moveTape": "halt"
            },
        ]})

        this.setState({tapeArray: ["blank","blank","blank","1","0","1","1","blank","blank","blank"]})
        this.setState({startState: "q0"})
        this.setState({currentState: "q0"})
        this.setState({tapePosition: 3})
        this.setState({play: false})
    }

    genericSetter = () => {
        this.setState({stateList: ["q0", "q1"]})
        this.setState({instructions: [
            {
                "state": "q0",
                "ifRead": "0",
                "write": "0",
                "goTo": "q0",
                "moveTape": "right"
            },
            {
                "state": "q0",
                "ifRead": "1",
                "write": "1",
                "goTo": "q1",
                "moveTape": "left"
            },

            {
                "state": "q1",
                "ifRead": "0",
                "write": "0",
                "goTo": "q1",
                "moveTape": "left"
            },

            {
                "state": "q1",
                "ifRead": "1",
                "write": "1",
                "goTo": "q0",
                "moveTape": "right"
            },
        ]})

        this.setState({tapeArray: ["1","0","0","0","0","0","0","0","0","1"]})
        this.setState({startState: "q0"})
        this.setState({currentState: "q0"})
        this.setState({tapePosition: 4})
        this.setState({play: false})
    }

    // Function for running one iteration of the Turing Machine
    startMachine = () => {

        // Get starting state, and other required information
        let tempInstructions = this.state.instructions.slice()
        let tempNextState = tempInstructions.find(instruction => {
            return (instruction.state === this.state.currentState && instruction.ifRead === this.state.tapeArray[this.state.tapePosition])
        })
        
        // Code for handling possible errror
        if(tempNextState === undefined){
            this.setState({play: true})
            this.setState({error: true})
            throw new Error("Incomplete Instructions: Click Reset")
        }
        if (tempNextState.moveTape === "halt"){
            this.setState({play: true})
            //console.log("HALT")
        }
        
        // Segment for handling changes made to the tape
        let newTapeArray = this.state.tapeArray.slice()
        newTapeArray[this.state.tapePosition] = tempNextState.write

        let newTapePosition = this.state.tapePosition + (tempNextState.moveTape === "left" ? -1 : 1)

        // Handle generation of additional tape to the left
        if (newTapePosition < 0){
            let tempTapeArray = ["blank"].concat(newTapeArray)

            newTapeArray = tempTapeArray

            newTapePosition = 0
        }

        // Handle generation of additional tape to the right
        else if (newTapePosition > this.state.tapeArray.length - 1){
            newTapeArray.push("blank")
        }

        // Set state to update values on the screen
        this.setState({
            currentState: tempNextState.goTo,
            tapeArray: newTapeArray,
            tapePosition: newTapePosition
        })
    }

    render(){
        const {classes} = this.props
        return(
            <ErrorBoundary>
            <Grid
                container
                direction="row"
                justify="space-evenly"
                alignItems="center"
                spacing={24}>
                
                <Grid>
                    
                    {/* Component for displaying the tape*/}
                    <TuringTape
                        dataList={this.state.dataList}
                        instructions={this.state.instructions}
                        currentScript={this.state.currentScript}
                        moveList={this.state.moveList}
                        tapeArray={this.state.tapeArray}
                        changeCell={this.changeCell}
                        tapePosition={this.state.tapePosition}
                        play={this.state.play}/>
                </Grid>

                <Grid item>
                    
                    {/* Component for displaying static commentary, pseudocode, and the like */}
                    <CodeView
                        light={this.props.light}
                        currentScript={this.state.currentScript}/>
                </Grid> 

                <Grid item>
                    <div>
                        {/* Component for handling data operations on the Turing Machine*/}
                        <TuringControls
                            dataList={this.state.dataList}
                            addData={this.addData}
                            removeData={this.removeData}

                            scriptList={this.state.scriptList}
                            currentScript={this.state.currentScript}
                            setScript={this.setScript}

                            stateList={this.state.stateList}
                            addStates={this.addStates}
                            removeStates={this.removeStates}

                            moveList={this.state.moveList}
                            instructions={this.state.instructions}
                            addInstruction={this.addInstruction}
                            removeInstruction={this.removeInstruction}
                            setInstruction={this.setInstruction}
                            
                            endless10Setter={this.endless10Setter}
                            incrementOneSetter={this.incrementOneSetter}
                            genericSetter={this.genericSetter}

                            setPlay={this.setPlay}
                            play={this.state.play}
                            startMachine={this.startMachine}
                            
                            error={this.state.error}
                            setError={this.setError}/>
                        
                        <div style={{marginTop: '24px'}}></div>

                        {/* Component for displaying references, and the like */}
                        <Paper
                            className={classes.controlPaper}
                            elevation={7}>

                            <Typography color="secondary" variant="h5" gutterBottom>
                                References
                            </Typography>

                            <Typography component="a" target="_blank" href="https://www.google.com">
                                THIS IS SOME TEXT
                            </Typography>
                            <Typography component="a" target="_blank" href="https://www.google.com">
                                THIS IS SOME TEXT
                            </Typography>
                            <Typography component="a" target="_blank" href="https://www.google.com">
                                THIS IS SOME TEXT
                            </Typography>
                        </Paper>
                    </div>
                </Grid>
            </Grid>
            </ErrorBoundary>
        )
    }
}

export default withStyles(styles, {withTheme: true})(Turing)