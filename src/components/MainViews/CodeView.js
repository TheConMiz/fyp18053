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
            value:
`function bubbleSort() {
    console.log(test);
}`
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
                    value={"// " + this.props.currentScript + " Sort"}
                    setAutoScrollEditorIntoView={true}
                    setUseWrapMode={true}
                    indentedSoftWrap={true}
                />

            </Paper>

        )
    }
}

export default withStyles(styles, {withTheme: true})(CodeView)