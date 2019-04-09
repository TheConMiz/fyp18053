import React from 'react';

// Self-generated components
import AppDrawer from './AppDrawer/AppDrawer';
//import CodePortal from './CodePortal/CodePortal';
//import InfoCard from './temp/InfoCard/InfoCard';
//import ControlPanel from './CodeControls/ControlPanel';
import SimView from './SimView/SimView';
import AboutUs from './AboutUs'

// Material UI Components
import { MuiThemeProvider, createMuiTheme, withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid/Grid';

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

            currentMode: "Sorting",
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

    // Handle modification of the currentMode prop
    handleCurrentMode = (text) => {
        this.setState({currentMode: text})
        // Save in local storage, so as to remember current page upon refresh
        //localStorage.setItem('currentMode', text)
    }

    handlePlayPause = () => {
        this.setState(state => ({play: !this.state.play}));
    }
    
    // Save Light/Dark theme, and Helper mode choice in local storage
    componentWillMount(){
        localStorage.getItem('light') && this.setState({
            light: JSON.parse(localStorage.getItem('light')),
            helper: JSON.parse(localStorage.getItem('helper')),
            //currentMode: localStorage.getItem('currentMode')
        })
    }

    componentWillUpdate(nextProps, nextState){
        localStorage.setItem('light', JSON.stringify(nextState.light))
        localStorage.setItem('helper', JSON.stringify(nextState.helper))
    }
    
    render() {

        //TODO: FIX REDIRECT TO TAG: SET IT TO CURRENT PAGE
        
        const {classes} = this.props;
        return (
            <div className = {classes.root}>
        
                <MuiThemeProvider theme = {this.state.light ? lTheme : dTheme}>

                    <AppDrawer
                        handleCurrentMode={this.handleCurrentMode}
                        handleHelperChange={this.handleHelperChange} 
                        handleLightChange={this.handleLightChange} 
                        currentMode={this.state.currentMode}
                        helper={this.state.helper} 
                        light={this.state.light} 
                        modes={this.state.modes}
                    />                    
                    <div style={{marginTop: '90px'}}></div>

                    <Switch>
                        {/* <Route
                            exact path={
                                this.state.currentMode === "FYP18053" ? "/" : 
                                this.state.currentMode === "Turing" ? "/turing" :
                                this.state.currentMode === "von Neumann" ? "/von_neumann": 
                                this.state.currentMode === "Sorting" ? "/sorting" :  "/"
                            }
                            render={ () => 

                                <Grid 
                                    container direction="row" 
                                    justify="space-evenly" 
                                    alignItems="center" 
                                    spacing={24}>

                                    <Grid item>
                                        <SimView
                                            light={this.state.light}
                                            currentMode={this.state.currentMode}/>
                                    </Grid>

                                    <Grid item >
                                        <CodePortal 
                                            light={this.state.light}
                                            currentMode={this.state.currentMode}/>
                                            
                                    </Grid>
                                    
                                    <Grid item >
                                        <ControlPanel
                                            data={this.state.data}
                                            handleShuffleData={this.handleShuffleData}
                                            handleNewData={this.handleNewData}
                                            currentMode={this.state.currentMode}
                                            handlePlayPause={this.handlePlayPause}
                                            play={this.state.play}/>
                                    </Grid>

                                    <Grid item>
                                        <InfoCard/>
                                    </Grid>                           
                                </Grid>
                            }>
                        </Route> */}

                        <Route exact path="/sorting" render={() => 

                            <SimView/>
                        }/>

                        <Route exact path="/about_us" component={AboutUs}/>

                        <Redirect to={
                            this.state.currentMode === "FYP18053"? "/" : this.state.currentMode.replace(/\s/g,'_').toLowerCase()}/>

                    </Switch>
                </MuiThemeProvider>
            </div>                
        )
    }
}

export default withStyles(styles)(App);