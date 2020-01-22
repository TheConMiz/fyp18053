import React from 'react'

import AceEditor from 'react-ace'
// import solarized_dark from 'brace/theme/solarized_dark'
// import github from 'brace/theme/github'
// import javascript from 'brace/mode/javascript'

// Material UI components
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

        // States for storing static source code
        this.state = {

bubbleValue:
`// Bubble Sort: Time Complexity of O(n^2)
// Source: https://www.geeksforgeeks.org/bubble-sort/
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
// Source: https://www.geeksforgeeks.org/insertion-sort/
function insertionSort(arrayOfValues) {

    // For each value, set it as a key
    var currentKey;
    for (var i = 0; i < arrayOfValues; ++i) {
        
        currentKey = arrayOfValues[i];
        var j = i - 1;

        // Elements that are greater than the key are pushed a position further

        while (j >= 0 && arrayOfValues[j] > currentKey) {
            
            arrayOfValues[j + 1] = arrayOfValues[j];
            
            --j;
        }
        arrayOfValues[j + 1] = currentKey;
    }
}
`,

quickValue:
`// Quick Sort: Time Complexity of O(n log n)
// Source: https://www.geeksforgeeks.org/quick-sort/

function partition(arrayOfValues, low, high) {
    var pivot = arrayOfValues[high];
    
    // Set the index of the smaller value
    var i = low - 1;
    
    // If the current value is smaller than or equal to the pivot,
    // The index is increased, and the two are swapped
    for (var j = low; j <= high - 1; ++j) {

        if (arrayOfValues[j] <= pivot) {
            ++i;
            swap(arrayOfValues[i], arrayOfValues[j]);
        }
    }

    swap(arrayOfValues[i + 1], arrayOfValues[high])
}

function quickSort(arrayOfValues, low, high) {
    // Uses recursion to solve the problem!

    // Set pi to partition the array
    var pi = partition(arrayOfValues, low, high);

    // Recursively sort separated elements
    quickSort(arrayOfValues, low, pi - 1);
    quickSort(arrayOfValues, pi + 1, high);
}`,

selectionValue:
`// Selection Sort: Time Complexity of O(n^2)
// Source: https://www.geeksforgeeks.org/selection-sort/
function selectionSort(arrayOfValues) {

    // For each value in the array
    for (var i = 0; i < arrayOfValues.length; ++i) {
        
        // Find the smallest smallest value by comparison
        var minId = i;

        for (var j = i + 1; j < n; ++j) {
            if (arrayOfValues[j] < arrayOfValues[minId]) {
                minId = j;
            }
        }

        // Swap the smallest element with the initial element
        swap(arrayOfValues[minId], arrayOfValues[i]);
    }
    
}`,


        }
    }

    render(){
        const {classes} = this.props
        // Instance of Ace Editor for displaying static source code
        return(
            <Paper className={classes.root} elevation={7}>
                <AceEditor
                    width="550px"
                    height="480px"
                    wrapEnabled={true}
                    onLoad={this.onLoad}
                    onChange={this.onChange}
                    // mode="javascript"
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
                            "// No Script selected"
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