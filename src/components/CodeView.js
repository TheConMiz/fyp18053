import React from 'react'
import AceEditor from 'react-ace'

import 'brace/theme/tomorrow_night_blue';

class CodeView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: "tomorrow_night_blue",
            light: true,
            defaultValue: "testing!"
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