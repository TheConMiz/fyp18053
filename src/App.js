import React from 'react'
import CodeView from './components/core/CodeView/CodeView'
import LightSwitch from './components/ui/LightSwitch'
import './App.css';

class App extends React.Component {
    render() {
        return ( 
            <div className = "App">
                <CodeView/>
                <LightSwitch
                    
                />
            </div>
        )
    }
}

export default App;
