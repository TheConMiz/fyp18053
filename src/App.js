import React from 'react'
import './App.css';
import AppDrawer from './components/AppDrawer/AppDrawer'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import lightTheme from './components/themes/lightTheme'
import darkTheme from './components/themes/darkTheme'

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

    handleLightChange = () =>{
        this.setState(state => ({light: !this.state.light}))
    }
    
    render() {
        return ( 
            <div className = "App">
                <MuiThemeProvider theme = {this.state.light ? lTheme : dTheme}>
                    <AppDrawer handleLightChange={this.handleLightChange} light={this.state.light}/>
                </MuiThemeProvider>
           </div>
        )
    }
}

export default App;