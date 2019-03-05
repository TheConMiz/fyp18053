import React from 'react'
import './App.css';
import AppDrawer from './components/AppDrawer/AppDrawer'
import SimView from './components/TuringSimView'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import lightTheme from './components/themes/lightTheme'
import darkTheme from './components/themes/darkTheme'
import CodeView from './components/CodeView'

const lTheme = createMuiTheme(lightTheme)
const dTheme = createMuiTheme(darkTheme)

class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            light: true,
        }
        this.handleLightChange = this.handleLightChange.bind(this)
    }

    // Handles change of theme
    handleLightChange = () =>{
        this.setState(state => ({light: !this.state.light}))
    }
    
    render() {
        return ( 
            <div className = "App">
                <MuiThemeProvider theme = {this.state.light ? lTheme : dTheme}>
                    <AppDrawer handleLightChange={this.handleLightChange} light={this.state.light}/>
                    <div className ="CodeView">
                        <CodeView handleLightChange={this.handleLightChange} light={this.state.light}/>
                    </div>
                    <div className="SimView">
                        <SimView/>
                    </div>
                </MuiThemeProvider>
           </div>
        )
    }
}

export default App