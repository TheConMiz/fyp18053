import React from 'react'
import AceEditor from 'react-ace'
import terminal from 'brace/theme/terminal'
import solarized_light from 'brace/theme/solarized_light'

class CodeView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: "// This is some default text"
        }
    }

    render(){
        return(
            <div>
                <AceEditor
                    theme={(!this.props.light)? "terminal": "solarized_light"}
                    highlightActiveLine={true}
                    editorProps={{$blockScrolling: Infinity}}
                    enableBasicAutocompletion={false}
                    value={this.state.value}
                    setAutoScrollEditorIntoView={true}
                    setUseWrapMode={true}
                    indentedSoftWrap={true}
                />
            </div>
        )
    }
}

export default CodeView