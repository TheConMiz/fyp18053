import React from 'react'
import AceEditor from 'react-ace'

import 'brace/theme/tomorrow_night_blue';
import 'brace/theme/tomorrow'


class CodeView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: "",
            light: true
        }
    }

    render(){
        return(
            <div>
                <AceEditor
                    theme={this.state.theme}
                    defaultValue={this.state.defaultValue}
                />
            </div>

            
        );
    }
}

export default CodeView;