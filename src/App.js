import React from 'react'

import AppDrawer from './components/AppDrawer/AppDrawer'
import { MuiThemeProvider, createMuiTheme, withStyles} from '@material-ui/core/styles'
import lightTheme from './baseThemes/lightTheme'
import darkTheme from './baseThemes/darkTheme'
import CodeView from './components/CodeView/CodeView'
import InfoCard from './components/InfoCard/InfoCard'


import Grid from '@material-ui/core/Grid/Grid'
import { HashRouter } from 'react-router-dom'

import ControlPanel from './components/CodeControls/ControlPanel'

import SortD3 from './components/SimView/Sorting Algorithms/SortD3'

const lTheme = createMuiTheme(lightTheme)
const dTheme = createMuiTheme(darkTheme)

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
})

class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            light: true,
        }
        this.handleLightChange = this.handleLightChange.bind(this)
    }

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
        const {classes, theme} = this.props;
        
        return ( 
            <HashRouter>
                <div className = {classes.root}>
                    <MuiThemeProvider theme = {this.state.light ? lTheme : dTheme}>
                        <AppDrawer handleLightChange={this.handleLightChange} light={this.state.light}/>
                        
                        <Grid container className={classes.grid} justify="center" spacing={16}>

                            <Grid item md={6}>
                                <SortD3></SortD3>
                            </Grid>

                            <Grid item md={6}>
                                <CodeView handleLightChange={this.handleLightChange} light={this.state.light}/>
                            </Grid>

                            <Grid item md={6}>
                                <ControlPanel></ControlPanel>
                            </Grid>

                            <Grid item md={6}>
                                <InfoCard/>
                            </Grid>
                        </Grid>
                    </MuiThemeProvider>
                </div>
            </HashRouter>
        )
    }
}

export default withStyles(styles)(App);