import React from 'react'
import AceEditor from 'react-ace'
import solarized_dark from 'brace/theme/solarized_dark'
import github from 'brace/theme/github'
import Paper from '@material-ui/core/Paper/Paper'
import {withStyles} from '@material-ui/core/styles'
import Switch from '@material-ui/core/Switch'
import FormControlLabel from '@material-ui/core/FormControlLabel'

const styles = theme => ({
    //Material UI Styling
    codeView: {
        flexGrow: 1,
        //marginTop: 85,
        //marginRight: 75,
        //marginLeft: 32.5,
        width: 570,
        height: 500,
        padding: theme.spacing.unit,
    },
})

class CodeView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: "// This is some default text"
        }
    }

    render(){
        const {classes, theme} = this.props
        return(
            <div>
                <Paper className={classes.codeView} elevation={7}>
                    <AceEditor
                        width="550px"
                        height="440px"
                        wrapEnabled={true}
                        fontSize={14}
                        className={classes.codeEditor}
                        theme={(!this.props.light)? "solarized_dark": "github"}
                        highlightActiveLine={true}
                        editorProps={{$blockScrolling: Infinity}}
                        enableBasicAutocompletion={false}
                        value={this.state.value}
                        setAutoScrollEditorIntoView={true}
                        setUseWrapMode={true}
                        indentedSoftWrap={true}
                    />
                    <FormControlLabel
                        label="Toggle Editor Mode"
                        labelPlacement="start"
                        control={
                            <Switch/>
                        }
                    />

                </Paper>
            </div>
        )
    }
}

export default withStyles(styles, {withTheme: true})(CodeView) 