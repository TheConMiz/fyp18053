import React from 'react'
import AceEditor from 'react-ace'
import solarized_dark from 'brace/theme/solarized_dark'
import github from 'brace/theme/github'
import javascript from 'brace/mode/javascript'
import Paper from '@material-ui/core/Paper/Paper'
import {withStyles} from '@material-ui/core/styles'

const styles = theme => ({
    //Material UI Styling
    root: {
        flexGrow: 1,
        width: 570,
        height: 500,
        padding: theme.spacing.unit,
    },
})

class CodeView extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            // States for showing static hints on how to use the Turing Machine

endlessValue: 
`/*Ground Rules
    Select any of the predefined scripts to play with.
    Click the buttons below and explore the Turing Machine's functionality.
    Click the cells above to set their values. 
    If a script does not work as expected, do not panic!
    Perhaps, the instructions are not as well-defined as required.
    Simply reset the Machine, and try again!
*/

// Endless Ones and Zeroes
// The first Turing Machine, devised by Alan Turing himself.`,

incrementValue:
`/*Ground Rules
    Select any of the predefined scripts to play with.
    Click the buttons below and explore the Turing Machine's functionality.
    Click the cells above to set their values. 
    If a script does not work as expected, do not panic!
    Perhaps, the instructions are not as well-defined as required.
    Simply reset the Machine, and try again!
*/

// Increment by 1
// A simple script that increases the binary value by 1. Try to adapt it for
// datasets with gaps in them.`,
pingPongValue:
`/*Ground Rules
    Select any of the predefined scripts to play with.
    Click the buttons below and explore the Turing Machine's functionality.
    Click the cells above to set their values. 
    If a script does not work as expected, do not panic!
    Perhaps, the instructions are not as well-defined as required.
    Simply reset the Machine, and try again!
*/

// Ping-Pong
// The machine will run for as long as it is bracketed by 1s.
// Try dealing with blank spots in the dataset!`,

        }
    }

    render(){
        const {classes} = this.props

        return(
            <Paper className={classes.root} elevation={7}>
                <AceEditor
                    width="550px"
                    height="480px"
                    wrapEnabled={true}
                    onLoad={this.onLoad}
                    onChange={this.onChange}
                    mode="javascript"
                    fontSize={18}
                    theme={(!this.props.light)? "solarized_dark": "github"}
                    highlightActiveLine={true}
                    editorProps={{$blockScrolling: Infinity}}
                    readOnly={true}
                    value={ 
                        (   this.props.currentScript === "Endless 1/0s" ? this.state.endlessValue : 
                            this.props.currentScript === "Increment by 1" ? this.state.incrementValue:
                            this.props.currentScript === "Ping-Pong" ? this.state.pingPongValue: 
                            this.state.freeModeValue
                        )}
                    setAutoScrollEditorIntoView={true}
                    setUseWrapMode={true}
                    indentedSoftWrap={true}
                />
            </Paper>

        )
    }
}

export default withStyles(styles, {withTheme: true})(CodeView)