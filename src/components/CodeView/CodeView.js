import React from 'react'
import AceEditor from 'react-ace'
import solarized_dark from 'brace/theme/solarized_dark'
import github from 'brace/theme/github'
import Paper from '@material-ui/core/Paper/Paper'
import { withStyles, createMuiTheme } from '@material-ui/core/styles'
import Theme from './Theme'

const styles = theme => ({
    //Material UI Styling
    codeView: {
        flexGrow: 1,
        marginLeft: 60,
        marginTop: 90,
        width: 520,
        padding: theme.spacing.unit,
    },
    // Ace Editor Styling
    codeEditor: {
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
                <Paper className={classes.codeView} square={false}>
                    <AceEditor
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
                </Paper>

            </div>
        )
    }
}

export default withStyles(styles, {withTheme: true})(CodeView) 