import React from 'react'
import AceEditor from 'react-ace'
import solarized_dark from 'brace/theme/solarized_dark'
import github from 'brace/theme/github'
import Paper from '@material-ui/core/Paper/Paper'
import {withStyles} from '@material-ui/core/styles'

class CodeView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    // handleAceEdit = () =>{
    //     var session = AceEditor.session
    // }

    render(){
        //console.log(this.props.match.url)
        return(
                    <AceEditor
                        width="550px"
                        height="480px"
                        wrapEnabled={true}
                        fontSize={14}
                        theme={(!this.props.light)? "solarized_dark": "github"}
                        highlightActiveLine={true}
                        editorProps={{$blockScrolling: Infinity}}
                        readOnly={true}
                        // value={
                        //     // this.props.match.url === "/turing" ? "The Turing Machine": 
                        //     // this.props.match.url === "/von_neumann"? "The von Neumann Architecture" :
                        //     // this.props.match.url === "/sorting" ? "Sorting Algorithms": 
                        //     // ""
                        //  }
                        setAutoScrollEditorIntoView={true}
                        setUseWrapMode={true}
                        indentedSoftWrap={true}
                    />
        )
    }
}

export default CodeView 