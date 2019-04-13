import React from 'react'

import Paper from '@material-ui/core/Paper'
import {withStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import TuringControls from './TuringControls'
import Typography from '@material-ui/core/Typography'
import CodeView from './CodeView'

import TuringTape from './TuringTape'

// import Controls from './Controls'

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
            scriptList: ["Endless 1/0s", "Increment by 1", "Divisible by 3", "Palindrome Detection"],

            currentScript: "Endless 1/0s",

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
        
        // console.log(newInstruction)

        tempInstructions.push(newInstruction)

        // console.log(tempInstructions)
        
        this.setState({instructions: tempInstructions})
    }

    removeInstruction = () => {
        let tempInstructions = this.state.instructions.slice()
        tempInstructions.pop()
        console.log(tempInstructions)
        this.setState({instructions: tempInstructions})
    }

    setInstruction = (newObject, id) => {
        // console.log(newObject)
        // console.log(id)

        let tempInstructions = this.state.instructions.slice()
        tempInstructions[id] = newObject

        // console.log(tempInstructions)

        this.setState({instructions: tempInstructions})

    }

    endless10 = () => {
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

                <Grid item>
                    <TuringTape
                        dataTypes={this.state.dataTypes}/>
                </Grid>

                <Grid item>
                    <CodeView
                        light={this.props.light}
                        currentScript={this.state.currentScript}/>
                </Grid>

                <Grid item>
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
                        
                        />
                </Grid>

                <Grid item>
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
                </Grid>
            </Grid>

        )
    }
}

export default withStyles(styles, {withTheme: true})(Turing)