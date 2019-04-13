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

bubbleValue:
`// Bubble Sort: Time Complexity of O(n^2)
function bubbleSort(arrayOfValues) {    
    // For each value in the arrayOfValues...
    for (var i = 0; i < arrayOfValues.length; ++i) {

        // Consider only the unsorted arrayOfValues.length - i values
        for (var j = 0; j < arrayOfValues.length - i; ++j) {
            
            // If current value greater than the next value, then swap the two
            if (arrayOfValues[j] > arrayOfValues[j + 1]) {
                
                swap(arrayOfValues[j], arrayOfValues[j + 1]);
            }
        }
    }
}`,

insertionValue:
`// Insertion Sort: Time Complexity of O(n^2)
function insertionSort(arrayOfValues) {
    var currentKey;
    for (var i = 0; i < arrayOfValues; ++i) {
        currentKey = arrayOfValues[i];
        var j = i - 1;

        while (j >= 0 && arrayOfValues[j] > currentKey) {
            
        }

    }
}
`,

quickValue:
`// Quick Sort: Time Complexity of O(n^2)
function quickSort(arrayOfValues) {
    
}`,

selectionValue:
`// Selection Sort: Time Complexity of O(n^2)
function selectionSort(arrayOfValues) {
    
}`,


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
                    fontSize={15}
                    tabSize={4}
                    theme={(!this.props.light)? "solarized_dark": "github"}
                    highlightActiveLine={true}
                    editorProps={{$blockScrolling: Infinity}}
                    readOnly={true}
                    value={ 
                        (   this.props.currentScript === "Bubble" ? this.state.bubbleValue : 
                            this.props.currentScript === "Insertion" ? this.state.insertionValue:
                            this.props.currentScript === "Quick" ? this.state.quickValue: 
                            this.props.currentScript === "Selection" ? this.state.selectionValue:
                            "// No Script selected..."
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