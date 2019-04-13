import React from 'react'

import Paper from '@material-ui/core/Paper'
import {withStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import TuringControls from './TuringControls'
import Typography from '@material-ui/core/Typography'
import CodeView from './CodeView'

import TuringTape from './TuringTape'

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
            scriptList: ["Divisible by 3", "Endless 1/0s", "Increment by 1", "Palindrome Detection"],
            currentScript: "Divisible by 3",

            moveList: ["right", "left"],

            instructions: [
                {
                    "currentState": "q0",
                    "ifRead": "0",
                    "write": "0",
                    "goTo": "q0",
                    "moveTape": "right"
                },
            ],

            dataList: ["0", "1", "blank"],

            stateList: ["q0", "q1"],
            startState: "q0",
            
            currentState: "q0",

            tapeArray: ["0","0","0","0","0","0","0","0","0","0"],
            tapePosition: 4,
            play: false,
        }
    }

    addStates = () => {
        let tempStates = this.state.stateList.slice()
        tempStates.push("q" + tempStates.length)
        this.setState({stateList: tempStates})
        console.log(this.state.stateList)
    }

    removeStates = () => {
        let tempStates = this.state.stateList.slice()
        tempStates.pop()
        this.setState({stateList: tempStates})
        console.log(this.state.stateList)
    }

    setScript = (newScript) => {

        
        newScript === "Endless 1/0s" ? this.endless10Setter():
        newScript === "Increment by 1" ? this.incrementOneSetter():
        newScript === "Divisible by 3" ? this.divisibleByThreeSetter():
        newScript === "Palindrome Detection" ? this.palindromeSetter():
        
        console.log("No Script set")

        this.setState({currentScript: newScript})

        console.log(this.state.currentScript)
    }

    addInstruction = () => {
        let tempInstructions = this.state.instructions.slice()
        let newInstruction={
            "currentState": "q0",
            "ifRead": "blank",
            "write": "0",
            "goTo": "q0",
            "moveTape": "right"
        }
        
        tempInstructions.push(newInstruction)   
        this.setState({instructions: tempInstructions})
    }

    removeInstruction = () => {
        let tempInstructions = this.state.instructions.slice()
        tempInstructions.pop()
        console.log(tempInstructions)
        this.setState({instructions: tempInstructions})
    }

    setInstruction = (newObject, id) => {
        let tempInstructions = this.state.instructions.slice()
        tempInstructions[id] = newObject
        this.setState({instructions: tempInstructions})

    }

    changeCell = (cellId) => {
        console.log(cellId)
        let tempTape = this.state.tapeArray.slice()
        
        tempTape[cellId] === "0" ? tempTape[cellId] = "1" : 
        tempTape[cellId] === "1" ? tempTape[cellId] = "blank" :
        tempTape[cellId] = "0"

        this.setState({tapeArray: tempTape})
    }

    setPlay = () => {
        this.setState({play: !this.state.play})
    } 

    endless10Setter = () => {
        this.setState({stateList: ["q0", "q1", "q2", "q3"]})
        this.setState({instructions: [
            {
                "currentState": "q0",
                "ifRead": "blank",
                "write": "0",
                "goTo": "q1",
                "moveTape": "left"
            },
            {
                "currentState": "q1",
                "ifRead": "blank",
                "write": "blank",
                "goTo": "q2",
                "moveTape": "right"
            },
            {
                "currentState": "q2",
                "ifRead": "blank",
                "write": "1",
                "goTo": "q3",
                "moveTape": "right"
            },
            {
                "currentState": "q3",
                "ifRead": "blank",
                "write": "blank",
                "goTo": "q0",
                "moveTape": "right"
            },
        ]})     
        this.setState({tapeArray: ["blank","blank","blank","blank","blank","blank","blank","blank","blank","blank"]})

        this.setState({startState: "q0"})
        this.setState({currentState: "q0"})

    }

    incrementOneSetter = () => {
        this.setState({stateList: ["q0", "q1", "q2", "q3"]})
    }

    divisibleByThreeSetter = () => {

    }

    palindromeSetter = () => {
        
    }

    startMachine = () => {
        
        let temp = this.state.instructions.slice()
        
        let currentInstruction = temp.find((element) => element.currentState === this.state.currentState)

        if (currentInstruction.ifRead === this.state.tapeArray[this.state.tapePosition]) {
            
            let temp = this.state.tapeArray.slice();

            temp[this.state.tapePosition] = currentInstruction.write

            this.setState({currentState: currentInstruction.goTo})
        }

    }



    render(){
        const {classes} = this.props
        return(
            <Grid
                container
                direction="row"
                justify="space-evenly"
                alignItems="center"
                spacing={24}>
                
                <Grid>
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
                    
                    <CodeView
                        light={this.props.light}
                        currentScript={this.state.currentScript}/>
                </Grid> 

                <Grid item>
                    <div>
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
                            divisibleByThreeSetter={this.divisibleByThreeSetter}
                            palindromeSetter={this.palindromeSetter}

                            setPlay={this.setPlay}
                            play={this.state.play}
                            startMachine={this.startMachine}/>
                        
                        <div style={{marginTop: '24px'}}></div>
                    
                        <Paper
                            className={classes.controlPaper}
                            elevation={7}>

                            <Typography color="secondary" variant="h5" gutterBottom>
                                References
                            </Typography>

                            <Typography component="a" target="_blank" href="https://www.google.com">
                                THIS IS SOME TEXT
                            </Typography>

                        </Paper>
                    </div>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styles, {withTheme: true})(Turing)