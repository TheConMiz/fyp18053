import React from 'react';
import Ace from 'react-ace';
import brace from 'brace';
import Button from '@material-ui/core/Button';

// Define available languages
const languages = [
    'javascript',
    'java',
    ''
]

// Terminal: Dark Theme
// Tomorrow: Light Theme
const themes = [
    'terminal',
    'tomorrow'
]

themes.forEach(theme =>{
    require(`brace/theme/${theme}`);
});

const defaultCode = 'TESTDEFAULS'

function onChange(newValue) {
    console.log('change', newValue);
}

class CodeView extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                value: defaultCode,
                theme: 'terminal',
                mode: 'java',
                enableBasicAutocompletion: false,
                enableLiveAutocompletion: false,
                fontSize: 14,
                showGutter: true,
                showPrintMargin: true,
                highlightActiveLine: true,
                enableSnippets: false,
                showLineNumbers: true,
        }
    }
    render(){
        return(
            <div>
                <Ace
                    theme={this.state.theme}
                    mode= {this.state.mode}
                    value={this.state.value}

                    editorProps = {
                        {
                            $blockScrolling: true
                        }
                    }
                    onChange={onChange}
                />
                
                <Button color = "secondary"> Run Code </Button>
                <Button color = "secondary"> Reset </Button>
            </div>

        );
    }
}





export default CodeView;