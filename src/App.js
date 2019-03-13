import React from 'react'

import AppDrawer from './components/AppDrawer/AppDrawer'
import SimView from './components/TuringSimView'
import { MuiThemeProvider, createMuiTheme, withStyles} from '@material-ui/core/styles'
import lightTheme from './baseThemes/lightTheme'
import darkTheme from './baseThemes/darkTheme'
import CodeView from './components/CodeView/CodeView'
import InfoCard from './components/InfoCard/InfoCard'
import Grid from '@material-ui/core/Grid/Grid'
import { HashRouter } from 'react-router-dom'

const lTheme = createMuiTheme(lightTheme)
const dTheme = createMuiTheme(darkTheme)

const styles = theme => ({
    root:{
        flexGrow: 1,
    }
})

class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            light: true,
        }
        this.handleLightChange = this.handleLightChange.bind(this)
    }

    // READ UP ON LIFECYCLE METHODS

    // Handles change of theme from Light Mode to Dark Mode
    handleLightChange = () =>{
        this.setState(state => ({light: !this.state.light}))
    }

    // For remembering saved light settings
    componentWillMount(){
        localStorage.getItem('light') && this.setState({
            light: JSON.parse(localStorage.getItem('light'))
            
        })
    }
    componentWillUpdate(nextProps, nextState){
        localStorage.setItem('light', JSON.stringify(nextState.light))
    }

    
    render() {
        return ( 
            <HashRouter>
                <div className = "App">
                <MuiThemeProvider theme = {this.state.light ? lTheme : dTheme}>
                <AppDrawer handleLightChange={this.handleLightChange} light={this.state.light}/>
                <Grid container md={12}>
                    <Grid container md = {6} spacing={24}>
                        <div className ="CodeView">
                            <CodeView handleLightChange={this.handleLightChange} light={this.state.light}/>
                        </div>
                    </Grid>
                    <Grid container md = {6} spacing={12}>
                        <div className="InfoCard">
                            <InfoCard/>
                        </div>
                    </Grid>
                </Grid>
                </MuiThemeProvider>
            </div>
            </HashRouter>
        )
    }
}

export default withStyles(styles)(App);