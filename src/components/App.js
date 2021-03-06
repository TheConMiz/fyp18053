import React from 'react'

// Self-generated components
import AppDrawer from './AppDrawer/AppDrawer'
import TuringView from './MainViews/TuringView'
// import VonNeumannView from './MainViews/VonNeumannView'
import SortingView from './MainViews/SortingView'
import MainPage from './MainViews/MainPage'

// Material UI Components
import { MuiThemeProvider, createMuiTheme, withStyles} from '@material-ui/core/styles'

// Base Theme settings
import {lightTheme, darkTheme} from './themes'
import {Route, Switch} from 'react-router-dom'

// Light and Dark theme assets
const lTheme = createMuiTheme(lightTheme)
const dTheme = createMuiTheme(darkTheme)

// Material UI styling assets
const styles = theme => ({
    root: {
        flexGrow: 1
    },
})

class App extends React.Component {
    // Constructor for the Base App
    constructor(props) {
        super(props)
        
        this.state = {
            // Prop for handling changes from Light theme to Dark theme, and vice versa
            light: true,            
            // Prop for list of pages
            modes: ["Turing Machine", "Sorting Algorithms"],

            //"von Neumann Architecture", 
        }
        // Bind handler to the App Component
        this.handleLightChange = this.handleLightChange.bind(this)
    }

    // Handles change of theme from Light Mode to Dark Mode
    handleLightChange = () =>{
        this.setState(state => ({light: !this.state.light}))
        console.log("Light: " + this.state.light)
    }

    // Getter for "Lght" setting saved in LocalStorage
    componentWillMount(){
        localStorage.getItem('light') && this.setState({
            light: JSON.parse(localStorage.getItem('light')),
        })        
    }

    // Getter for saving "Light" setting in LocalStorage
    componentWillUpdate(nextProps, nextState){
        localStorage.setItem('light', JSON.stringify(nextState.light))
    }
    
    render() {    
        const {classes} = this.props
        return (
            <div className = {classes.root}>

                {/* Material UI Theming Component*/}
                <MuiThemeProvider theme = {this.state.light ? lTheme : dTheme}>

                    {/* App Drawer Component*/}
                    <AppDrawer
                        handleLightChange={this.handleLightChange} 
                        light={this.state.light} 
                        modes={this.state.modes}
                    /> 

                    <div style={{marginTop: '90px'}}></div>
                    {/* Switch Component for hyperlinks*/}
                    <Switch>
                        
                        <Route exact path="/sorting_algorithms" render={() =>                        
                            <SortingView
                                light={this.state.light}/>
                        }/>

                        <Route exact path="/turing_machine" render={() => 
                            <TuringView
                                light={this.state.light}/>
                        }/>
                        
                        {/* <Route exact path="/von_neumann_architecture" render={() => 
                            <VonNeumannView/>
                        }/> */}

                        <Route exact path="/" render={() => 
                            <MainPage/>
                        }/>
                    </Switch>
                </MuiThemeProvider>
            </div>             
        )
    }
}

export default withStyles(styles)(App)