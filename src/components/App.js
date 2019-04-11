import React from 'react';

// Self-generated components
import AppDrawer from './AppDrawer/AppDrawer';
import TuringView from './MainViews/TuringView'
import VonNeumannView from './MainViews/VonNeumannView'
import SortingView from './MainViews/SortingView'

// Material UI Components
import { MuiThemeProvider, createMuiTheme, withStyles} from '@material-ui/core/styles';

// Base Theme settings
import {lightTheme, darkTheme} from './themes';
import {Route, Switch, Redirect} from 'react-router-dom';

const lTheme = createMuiTheme(lightTheme);
const dTheme = createMuiTheme(darkTheme);

const styles = theme => ({
    root: {
        flexGrow: 1
    },
})

class App extends React.Component {
    // Constructor for the Base App
    constructor(props) {
        super(props);
        
        this.state = {
            // Prop for handling changes from Light theme to Dark theme, and vice versa
            light: true,
            // Prop for handling activation and deactivation of Helper mode
            helper: false,
            
            // Prop for list of pages
            modes: ["Turing", "von Neumann", "Sorting"],
        };

        // Bind handlers to the App Component
        this.handleLightChange = this.handleLightChange.bind(this);
        this.handleHelperChange = this.handleHelperChange.bind(this);
    }

    // Handles change of theme from Light Mode to Dark Mode
    handleLightChange = () =>{
        this.setState(state => ({light: !this.state.light}));
        console.log("Light: " + this.state.light);
    }

    // Handles (de)activation of Helper Mode
    handleHelperChange = () =>{
        this.setState(state => ({helper: !this.state.helper}));
        console.log("Helper: " + this.state.helper);
    }

    // Save Light/Dark theme, and Helper mode choice in local storage
    componentWillMount(){
        localStorage.getItem('light') && this.setState({
            light: JSON.parse(localStorage.getItem('light')),
            helper: JSON.parse(localStorage.getItem('helper')),
        })
    }

    componentWillUpdate(nextProps, nextState){
        localStorage.setItem('light', JSON.stringify(nextState.light))
        localStorage.setItem('helper', JSON.stringify(nextState.helper))
    }
    
    render() {
        
        const {classes} = this.props;
        return (
            
            <div className = {classes.root}>
        
                <MuiThemeProvider theme = {this.state.light ? lTheme : dTheme}>

                    <AppDrawer
                        handleHelperChange={this.handleHelperChange} 
                        handleLightChange={this.handleLightChange} 
                        helper={this.state.helper} 
                        light={this.state.light} 
                        modes={this.state.modes}
                    /> 

                    <div style={{marginTop: '90px'}}></div>

                    <Switch>
                        
                        <Route exact path="/sorting" render={() => 
                            <SortingView/>
                        }/>

                        <Route exact path="/turing" render={() => 
                            <TuringView/>
                        }/>

                        <Route exact path="/von_neumann" render={() => 
                            <VonNeumannView/>
                        }/>

                        <Redirect to="/"/>


                    </Switch>
                </MuiThemeProvider>
            </div>                
        )
    }
}

export default withStyles(styles)(App);