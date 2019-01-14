import React from 'react';
import {render} from 'react-dom';
import AceEditor from 'react-ace';
import brace from 'brace';

import 'brace/theme/monokai';
import 'brace/mode/javascript';

class App extends React.Component {
    render() {
        return ( 
            <div className = "App" >
                <AceEditor
                    theme = "monokai"
                    name = "test1"
                    height = "5em"
                    fontSize = {16}
                />
            </div>
        );
    }
}

export default App;
